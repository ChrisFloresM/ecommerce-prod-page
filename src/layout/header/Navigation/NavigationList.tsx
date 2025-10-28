import NavigationItem from "./NavigationItem.tsx";

const navigationList: string[] = [
  "Collections",
  "Men",
  "Wommen",
  "About",
  "Contact",
];

function NavigationList() {
  return (
    <ul className="flex flex-col gap-300 lg:flex-row lg:gap-400">
      {navigationList.map((name: string) => (
        <NavigationItem linkName={name} key={name} />
      ))}
    </ul>
  );
}

export default NavigationList;
