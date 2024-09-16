import { extname } from 'path';

export const generateRandomString = (charNumber: number) => {
  return Array(charNumber)
    .fill(null)
    .map(() => Math.round(Math.random() * 16).toString(16))
    .join('');
};

export const editFileName = (req, file: Express.Multer.File, callback) => {
  const fileExtName = extname(file.originalname);
  const randomName = generateRandomString(8);
  callback(null, `${randomName}${fileExtName}`);
};

export const imageFileFilter = (req, file, callback) => {
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
    return callback(new Error('Only image files are allowed!'), false);
  }

  callback(null, true);
};
