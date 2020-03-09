export default function createAvatarString(name) {
  if (typeof name === 'undefined' || name === '') return '';
  const arrayName = name.split(' ');
  let avatarName = '';

  for (let index = 0; index < 2; index++) {
    avatarName += arrayName[index].charAt(0).toUpperCase();
  }

  return avatarName;
}
