import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()]).then((response) => {
    let all = {};
    for (const itm of response) {
      all = { ...all, ...itm };
    }
    const { body, firstName, lastName } = all;
    console.log(body, firstName, lastName);
  });
}
