import classNames from 'classnames';
import * as React from 'react';
// import { StaticImage } from 'gatsby-plugin-image';
// import { Link } from 'gatsby';
// import { useBreakpoint } from 'gatsby-plugin-breakpoints';


const Header = () => {
  const [scrolling, setScrolling] = React.useState(false);
  const [scrollTop, setScrollTop] = React.useState(0);

  React.useEffect(() => {
    const onScroll = e => {
      setScrollTop(e.target.documentElement.scrollTop);
      setScrolling(e.target.documentElement.scrollTop > scrollTop);
    };
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollTop]);

  const classScroll = classNames({'scroll' : scrolling || scrollTop > 0});

  return (
    <header className={classScroll}>
      THIS IS THE HEADER
      {scrolling}
      {scrollTop}
      {scrolling ? <p>isScrolling</p> : <p>isNotScrolling</p>}
    </header>
  );
};

export default Header;
