const path = require("path");
const fs = require("fs/promises");
const Jimp = require("jimp");
const { httpError } = require("../../helpers");

const pathToAvatars = path.resolve(__dirname, "../../public/avatars");

const updateUserAvatar = async (req, res, next) => {
  const { userDoc } = req.user;
  const { filename: avatarFilename, path: pathToTmpAvatar } = req.file;
  const publicPathToAvatar = path.join(pathToAvatars, avatarFilename);
  //   console.log(pathToAvatars, userDoc, avatarFilename, pathToTmpAvatar);

  // resize and move image to avatars folder
  (await Jimp.read(pathToTmpAvatar)).cover(250, 250).write(publicPathToAvatar);
  await fs.unlink(pathToTmpAvatar);

  userDoc.setAvatar(publicPathToAvatar);
  const updatedUser = await userDoc.save();

  if (!updatedUser) throw httpError(500, "Failed to update user`s avatar");

  // send back user info
  res.status(200).json({ avatarURL: "/avatars/" + avatarFilename });
};

module.exports = updateUserAvatar;
