import "@styles/globals.css";
import Footer from "./footer";
import Header from "./header";

export const metadata = {
  title: "Learn with Ariful ",
  descripton: "Developer & Speaker",
};
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="bg-[#0f172a]">
        <main className="">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
