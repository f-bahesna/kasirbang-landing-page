import Navigation from "../Navigation";

export default function NavigationExample() {
  return (
    <Navigation 
      onGetStarted={() => console.log("Get Started clicked")} 
    />
  );
}
