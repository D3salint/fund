import { HomeScreens } from "./screens/Home";
import { PageWrapper } from "./shared/ui/PageWrapper";
import { Preloader } from "./shared/ui/Preloader";
import { RegisterGsapPlugins } from "./shared/ui/RegisterGsapPlugins";
import { Scroller } from "./shared/ui/Scroller";

function App() {
  return (
    <PageWrapper>
      <RegisterGsapPlugins />
      <Scroller>
        <Preloader />
        <HomeScreens.Hero />
        <HomeScreens.Summary />
        <HomeScreens.StandOut />
        <HomeScreens.Problem />
        <HomeScreens.WhyNow />
        <HomeScreens.Opportunity />
        <HomeScreens.Investment />
        <HomeScreens.MarketAnalysis />
        <HomeScreens.Team />
        <HomeScreens.ExampleDeal />
        <HomeScreens.InvestmentTerms />
        <HomeScreens.Calculator />
        <HomeScreens.BuildFuture />
      </Scroller>
    </PageWrapper>
  );
}

export default App;
