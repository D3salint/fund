import { HomeScreens } from "./screens/Home";
import { PageWrapper } from "./shared/ui/PageWrapper";
import { RegisterGsapPlugins } from "./shared/ui/RegisterGsapPlugins";

function App() {
  return (
    <PageWrapper>
      <HomeScreens.Hero />
      <HomeScreens.Summary />
      <HomeScreens.StandOut />
      <HomeScreens.Problem />

      <RegisterGsapPlugins />
    </PageWrapper>
  );
}

export default App;
