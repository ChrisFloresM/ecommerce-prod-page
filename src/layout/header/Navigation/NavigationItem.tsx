interface INavItemProps {
  linkName: string;
}

function NavigationItem({ linkName }: INavItemProps) {
  return (
    <li>
      <a
        href="#"
        className="hover:cusror-pointer leading-preset-3 lg:hover:text-grey-950 lg:visited:text-grey-500 text-grey-950 lg:text-grey-500 visited:text-grey-950 lg:text-preset-4 lg:leading-preset-4 border-b-orange-500 text-[1.125rem] font-bold transition-colors duration-100 hover:text-orange-500 active:text-white lg:pb-[45px] lg:font-normal lg:hover:border-b-3 lg:active:text-orange-500"
      >
        {linkName}
      </a>
    </li>
  );
}

export default NavigationItem;
