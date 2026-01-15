import React from "react";
import logo from "/Images/logo.svg";
import linkedIn from "/Images/Linkedin.svg";
import facebook from "/Images/facebook.svg";
import twitter from "/Images/twitter.svg";
import instagram from "/Images/instagram.svg";

export default function Footer() {
  return (
    <>
      <section className="bg-[#efefef] py-25">
        <div>
          <div className="flex flex-row lg:w-291.75 mx-auto mb-5">
            <div>
              <img src={logo} alt="Logo images" className="pr-30 pl-5" />
            </div>
            
            <table className="">
              <tr>
                <th>Product</th>
                <th>Marketing</th>
                <th>Support</th>
              </tr>

              <tr>
                <td>Application Performance Monitoring</td>
                <td>Product Managers</td>
                <td>Help Center</td>
              </tr>

              <tr>
                <td>Server Monitoring</td>
                <td>Software Engineers</td>
                <td>FAQ</td>
              </tr>

              <tr>
                <td>Cloud Monitoring</td>
                <td>Cyber Security Analyst</td>
                <td>How Telex Works</td>
              </tr>

              <tr>
                <td>Database Monitoring</td>
                <td>Small Business Owners</td>
                <td>Pricing Experience</td>
              </tr>

              <tr>
                <td>Networking Monitoring</td>
                <td>Social Media Manager</td>
                <td>About Us</td>
              </tr>

              <tr>
                <td>Webhook Testing</td>
                <td>DevOps</td>
                <td>Contact Us</td>
              </tr>

              <tr>
                <td>Push Notification</td>
                <td>Data Administrator</td>
              </tr>

              <tr>
                <td>Uptime Monitoring</td>
                <td>Landing Page</td>
              </tr>

              <tr>
                <td>Website Testing</td>
              </tr>

              <tr>
                <td>Integrations</td>
              </tr>
            </table>
          </div>
          <div className="flex flex-row justify-between lg:w-291.75 mx-auto">
            <div className="flex flex-row gap-4">
              <img src={instagram} alt="" />
              <img src={twitter} alt="" />
              <img src={facebook} alt="" />
              <img src={linkedIn} alt="" />
            </div>

            <div className="flex flex-row gap-6 font-semibold">
              <p>Privacy Policy Terms of Use</p>
              <p>© 2024 Telex. All Rights Reserved</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
