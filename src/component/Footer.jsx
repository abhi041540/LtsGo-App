import react from "react";
function Footer()
{
    return(
        <footer>
            <h3>Copyright {new Date().getFullYear()} LtsGo. All Rights Reserved.</h3>
            <a href="#"><i className="ion-arrow-up-b"></i></a>
        </footer>
    );
};
export default Footer;