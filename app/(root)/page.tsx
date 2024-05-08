import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";

const Home = () => {
  const loggedIn = {
    firstName: "Brian",
    lastName: "Antwi",
    email: "antwibrian82@gmail.com",
  };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficiently."
          />
        </header>
        Recent Transaction
      </div>
      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 123.5 }, { currrentBalance: 500.0 }]}
      />
    </section>
  );
};

export default Home;
