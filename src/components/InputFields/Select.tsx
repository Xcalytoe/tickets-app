import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ISelect, IState } from "../../helper/Typeface";
import variables from "../style/Variables.styles";
import { InputStyle } from "./InputFieldsStyle";

const Select = ({ selectOption, onChange, defaultOption }: ISelect) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);

  useEffect(() => {
    setSelectedOption(defaultOption);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [selectedOption, setSelectedOption] = useState<IState>();

  const onOptionClicked = (value: IState) => () => {
    setSelectedOption(value);
    onChange(value.value);
    setIsOpen(false);
    console.log(selectedOption);
  };
  return (
    <InputStyle>
      <DropDownContainer>
        <DropDownHeader
          onClick={toggling}
          type={selectedOption?.value ?? "all"}
        >
          <p>{selectedOption?.name}</p>
          <div>
            <span>{selectedOption?.count}</span>
          </div>
          <svg
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.99414 1.08008C9.02018 1.10612 9.04297 1.13542 9.0625 1.16797C9.08203 1.20052 9.10156 1.23307 9.12109 1.26562C9.13412 1.29818 9.14714 1.33398 9.16016 1.37305C9.16667 1.41211 9.16992 1.45443 9.16992 1.5C9.16992 1.53906 9.16667 1.57812 9.16016 1.61719C9.14714 1.66276 9.13086 1.70182 9.11133 1.73437C9.09831 1.76693 9.08203 1.79622 9.0625 1.82227C9.04297 1.85482 9.02018 1.88411 8.99414 1.91016L5.41992 5.48437C5.39388 5.51042 5.36458 5.5332 5.33203 5.55273C5.29948 5.57227 5.26693 5.58854 5.23438 5.60156C5.19531 5.62109 5.15625 5.63411 5.11719 5.64062C5.07813 5.64713 5.03906 5.65039 5 5.65039C4.95443 5.65039 4.91211 5.64713 4.87305 5.64062C4.83398 5.63411 4.79818 5.62109 4.76563 5.60156C4.72656 5.58854 4.69076 5.57227 4.6582 5.55273C4.62565 5.5332 4.59635 5.51042 4.57031 5.48437L0.996094 1.90039C0.970053 1.87435 0.947266 1.84505 0.927735 1.8125C0.908204 1.77995 0.888672 1.7474 0.869141 1.71484C0.85612 1.68229 0.846355 1.64648 0.839844 1.60742C0.833334 1.57487 0.830079 1.53906 0.830079 1.5C0.830079 1.5 0.830079 1.49674 0.830079 1.49023C0.830079 1.49023 0.830079 1.48698 0.830079 1.48047C0.830079 1.44141 0.836589 1.40234 0.84961 1.36328C0.85612 1.32422 0.865886 1.28841 0.878907 1.25586C0.891928 1.2168 0.908204 1.18099 0.927735 1.14844C0.947266 1.11588 0.970053 1.08659 0.996094 1.06055L1.41602 0.640624C1.44206 0.614583 1.47135 0.591796 1.50391 0.572265C1.52995 0.552734 1.5625 0.536458 1.60156 0.523437C1.63412 0.503906 1.66992 0.490885 1.70899 0.484374C1.74805 0.477864 1.78711 0.474609 1.82617 0.474609C1.87175 0.474609 1.91406 0.477864 1.95313 0.484374C1.99219 0.490885 2.028 0.503906 2.06055 0.523437C2.0931 0.536458 2.12565 0.552734 2.1582 0.572265C2.19076 0.591796 2.22005 0.614583 2.24609 0.640624L5 3.38477L7.73438 0.65039C7.78646 0.604818 7.84831 0.565755 7.91992 0.533203C7.99154 0.500651 8.06641 0.484375 8.14453 0.484375C8.14453 0.484375 8.14779 0.484375 8.1543 0.484375C8.19336 0.484375 8.23242 0.48763 8.27149 0.49414C8.31055 0.507161 8.34961 0.520182 8.38867 0.533203C8.42122 0.546224 8.45378 0.5625 8.48633 0.582031C8.51888 0.608073 8.54492 0.634114 8.56445 0.660156L8.99414 1.06055L8.99414 1.08008Z"
              fill="black"
            />
          </svg>
        </DropDownHeader>
        {isOpen && (
          <DropDownList>
            {selectOption.map((item) => (
              <ListItem
                key={item.id}
                type={item.value}
                onClick={onOptionClicked(item)}
              >
                {item.name}
                <div>
                  <span>{item.count}</span>
                </div>
              </ListItem>
            ))}
          </DropDownList>
        )}
      </DropDownContainer>
    </InputStyle>
  );
};

export default Select;

const DropDownContainer = styled.div`
  max-width: 160px;
  position: relative;
`;
const DropDownHeader = styled.div<{ type: string }>`
  ${variables}
  cursor: pointer;
  max-width: 130px;
  align-items: center;
  display: flex;
  column-gap: 10px;
  justify-content: space-between;
  p {
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 30px;
    letter-spacing: 0.26px;
    color: var(--primary-dark);
    flex-grow: 1;
    max-width: 65px;
  }
  div {
    display: flex;
    align-items: center;
    text-align: center;
  }
  span {
    display: inline-block;
    height: 20px;
    width: 20px;
    padding: 4px;
    border-radius: 50%;
    font-style: normal;
    font-weight: 700;
    font-size: 11px;
    line-height: 12px;
    letter-spacing: 0.26px;
    color: ${({ type }) =>
      type === "all" ? "var(--primary-dark)" : "var(--white)"};
    background: ${({ type }) =>
      type === "all"
        ? "var(--default-bg)"
        : type === "feedback"
        ? "var(--feedback-bg)"
        : type === "resolved"
        ? " var(--success-bg)"
        : "var( --blue)"};
  }
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
`;

const DropDownList = styled.ul`
  background: #ffffff;
  border: 1px solid #f2f2f2;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  list-style-type: none;
  top: 0;
  left: 0;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  position: absolute;
`;
const ListItem = styled.li<{ type: string }>`
  ${variables}
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
  padding-left: 15px;
  padding-right: 15px;
  cursor: pointer;
  transition: all 0.3s;
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 25px;
  letter-spacing: 0.26px;
  color: var(--secondary-text);
  &:hover {
    transition: all 0.3s;
    background: var(--secondary-bg);
  }
  div {
    display: flex;
    align-items: center;
    text-align: center;
  }
  span {
    display: inline-block;
    height: 20px;
    width: 20px;
    padding: 4px;
    border-radius: 50%;
    font-style: normal;
    font-weight: 700;
    font-size: 11px;
    line-height: 12px;
    letter-spacing: 0.26px;
    color: ${({ type }) =>
      type === "all" ? "var(--primary-dark)" : "var(--white)"};
    background: ${({ type }) =>
      type === "all"
        ? "var(--default-bg)"
        : type === "feedback"
        ? "var(--feedback-bg)"
        : type === "resolved"
        ? " var(--success-bg)"
        : "var( --blue)"};
  }
`;
