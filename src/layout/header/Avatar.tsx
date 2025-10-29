function Avatar() {
  return (
    <div className="rounded-full hover:cursor-pointer hover:outline-2 hover:outline-orange-500">
      <img
        src="/img/image-avatar.png"
        alt="A picture of the user's avatar"
        className="max-w-[24px] sm:max-w-[50px]"
      />
    </div>
  );
}

export default Avatar;
