import "@styles/globals.css";

export const metadata = {
  title: "MrPrompts",
  description: " Discover & Share AI Prompts",
};

const RootLayout = ({ children }) => {
  return (
    <html Lang="en">
      <body>
        <div className="main">
          <div className="gradient"></div>
        </div>
        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
