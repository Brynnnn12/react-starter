import { Outlet } from "react-router-dom";
import HomeLayout from "../../components/layout/HomeLayout";

export default function AboutPage() {
  return (
    <HomeLayout>
      <div className="container mx-auto py-14 ">
        <h1>About Us</h1>
        <p>Learn more about our company.</p>
      </div>
    </HomeLayout>
  );
}
