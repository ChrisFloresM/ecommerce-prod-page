interface INavItemProps {
  linkName: string;
}

function NavigationItem({ linkName }: INavItemProps) {
  return (
    <li>
      <a
        href="#"
        className="hover:cusror-pointer leading-preset-3 md:hover:text-grey-950 md:visited:text-grey-500 text-grey-950 md:text-grey-500 visited:text-grey-950 md:text-preset-4 md:leading-preset-4 border-b-orange-500 text-[1.125rem] font-bold transition-colors duration-100 hover:text-orange-500 active:text-white md:pb-[45px] md:font-normal md:hover:border-b-3 md:active:text-orange-500"
      >
        {linkName}
      </a>
    </li>
  );
}

export default NavigationItem;
