const Footer = () => {
  return (
    <>
      {/* Mobile Footer Navigation */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white border-t md:hidden">
        <div className="flex justify-around p-4">
          <div className="text-center">
            <span className="text-2xl">🏠</span>
            <span className="text-xs block">Home</span>
          </div>
          <div className="text-center">
            <span className="text-2xl">🔥</span>
            <span className="text-xs block">AI</span>
          </div>
          <div className="text-center">
            <span className="text-2xl">👤</span>
            <span className="text-xs block">Profile</span>
          </div>
        </div>
      </footer>

      {/* Desktop Footer */}
      <footer className="hidden md:flex justify-center bg-[#8B6121] p-12 mt-8 text-white">
        <div className="grid grid-cols-5 gap-4 w-10/12 ">
          <div>
            <h3 className="font-bold mb-2">ABOUT</h3>
            <ul className="text-sm">
              <li>Contact Us</li>
              <li>About Us</li>
              <li>Careers</li>
              <li>Stories</li>
              <li>Press</li>
              <li>Wholesale</li>
              <li>Corporate Information</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">HELP</h3>
            <ul className="text-sm">
              <li>Payments</li>
              <li>Shipping</li>
              <li>Cancellation & Returns</li>
              <li>FAQ</li>
              <li>Report Infringement</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">POLICY</h3>
            <ul className="text-sm">
              <li>Return Policy</li>
              <li>Terms Of Use</li>
              <li>Security</li>
              <li>Privacy</li>
              <li>Sitemap</li>
              <li>EPR Compliance</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">SOCIAL</h3>
            <ul className="text-sm">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>YouTube</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Mail Us:</h3>
            <p className="text-sm">
              Flipkart Internet Private Limited, Buildings Alyssa, Begonia &
              Clove Embassy Tech Village, Outer Ring Road, Devarabeesanahalli
              Village, Bengaluru, 560103, Karnataka, India
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
