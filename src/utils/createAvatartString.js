export default function createAvatarString(name) {
  if (typeof name === 'undefined' || name === '' || name.length < 0) return '';

  const arrayName = name.split(' ');
  let avatarName = '';

  if (arrayName.length === 1) {
    avatarName = arrayName[0].charAt(0).toUpperCase();
    return avatarName;
  } else if (arrayName.length > 1) {
    for (let index = 0; index < 2; index++) {
      avatarName += arrayName[index].charAt(0).toUpperCase();
    }
    return avatarName;
  }

  return avatarName;
}
