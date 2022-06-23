import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Inline = styled.div`
  display: flex;
`;

const BreadCrumbItem = styled.li`
  display: flex;
  justify-content: space-around;
  margin-right: 0.5rem;
  &:nth-child(n + 2)::before {
    width: 10px;
    content: "/";
  }

  &:last-child > a {
    color: white;
  }
`;

const LinkTag = styled.a`
  cursor: pointer;
  display: inline;
  position: relative;
  color: wheat;
  text-decoration: none;
  transition: 0.25s;
  &:after {
    content: "";
    position: absolute;
    transform: scaleX(0);
    height: 2px;
    width: 100%;
    bottom: 0;
    left: 0;
    background-color: #8888eb;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
    border-radius: 5px;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  &:hover {
    color: white;
    transition: 0.25s;
  }
`;

const Breadcrumb: React.FC = () => {
  const [pathURL, setPathURL] = useState<Array<string>>([]);

  useEffect(() => {
    const pathname = window.location.pathname.split("/");
    setPathURL(pathname.slice(1));
  }, []);

  function returnPage(index: number): string {
    var url = "";
    for (let i = 0; i < pathURL.length; i++) {
      url += "/" + pathURL[i];
      if (i === index) {
        break;
      }
    }

    return url;
  }

  return (
    <Inline>
      {pathURL.map((items, index) => {
        return (
          <BreadCrumbItem key={index}>
            <LinkTag href={returnPage(index)}>
              {items.charAt(0).toUpperCase() + items.slice(1)}
            </LinkTag>
          </BreadCrumbItem>
        );
      })}
    </Inline>
  );
};

export default Breadcrumb;
