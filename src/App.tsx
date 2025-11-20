import { HomeScreens } from "./screens/Home";
import { PageWrapper } from "./shared/ui/PageWrapper";
import { RegisterGsapPlugins } from "./shared/ui/RegisterGsapPlugins";

function App() {
  return (
    <PageWrapper>
      <RegisterGsapPlugins />
      <HomeScreens.Hero />
      <HomeScreens.Summary />
      <HomeScreens.StandOut />
      <HomeScreens.Problem />
      <HomeScreens.WhyNow />
      <HomeScreens.Opportunity />
      <HomeScreens.Investment />
      <HomeScreens.MarketAnalysis />
    </PageWrapper>
  );
}

export default App;
