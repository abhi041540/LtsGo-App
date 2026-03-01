function Footer() {
    return (
        <footer>
            <h3>Copyright {new Date().getFullYear()} LtsGo. All Rights Reserved.</h3>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#"><i className="ion-arrow-up-b"></i></a>
        </footer>
    );
};
export default Footer;