export default function createAvatarString(name) {
  const arrayName = name.split(' ');
  let avatarName = '';

  for (let index = 0; index < 2; index++) {
    avatarName += arrayName[index].charAt(0).toUpperCase();
  }

  return avatarName;
}
