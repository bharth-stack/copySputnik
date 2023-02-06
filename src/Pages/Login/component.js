import React, { useState, useRef } from "react";
import styled from "styled-components";
import I1 from "../../Assets/Images/brand.png";
import I2 from "../../Assets/Images/Path1.png";
import I3 from "../../Assets/Images/Path.png";
import I4 from "../../Assets/Images/Vector.png";
import I5 from "../../Assets/Images/men.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { emailHandler, passHandler, showHandler, otpHandlers } from "./action";
const DivTag = styled.div`
  width: 100%;
  background: linear-gradient(252.44deg, #262d96 0%, #764af6 100%);
  height: 100vh;
  display: grid;
  // grid-template-columns: 50% 50%;
  grid-template-rows: 15% 78% 7%;
  @media (max-width: 1919px) {
    // flex-direction: column;
    width: 100%;
  }

  @media (max-width: 1535px) {
    flex-direction: column;
    width: 110%;
  }
  @media (max-width: 1398px) {
    width: 100%;
  }
  // @media (min-width: 375px) {
  //   height: 100vh;
  // }
`;
const HeadTag = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  grid-row: 1/2;
`;
const ImgTag = styled.img`
  width: 18%;
  margin: 1rem 0 0 1.3rem;
  @media (max-width: 375px) {
    width: 38%;
  }
`;
const SectionCard = styled.section`
  /* border: 0.1rem solid black; */
  display: flex;
  border-radius: 5rem 0 5rem 0;
  margin-left: 13rem;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  width: 63%;
  padding: 1.3rem;
  background-image: linear-gradient(
    305deg,
    rgba(255, 255, 255, 0.9) 0%,
    rgba(255, 255, 255, 0.9) 50%,
    transparent 50%
  );
  background-size: 100%;
  /* border-radius: 3px; */
  -webkit-box-shadow: 0 1.5rem 4rem rgb(0 0 0 / 20%);
  box-shadow: 0 1.5rem 4rem rgb(0 0 0 / 20%);
  @media (min-width: 1536px) {
    width: 70%;
  }
  @media (max-width: 374px) {
    margin-top: 5rem;
    margin-left: 3rem;
    // width: 60%;
  }
`;
const SectionImg = styled.img`
  width: 47%;
  @media (max-width: 374px) {
    // margin-left: 3rem;
    display: none;
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
  gap: 2rem;
  width: 42%;
`;
const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  padding: 0.7rem 0 0.7rem 0.7rem;
  /* width: 100%; */
  border-radius: 0.5rem;
  border: none;
  box-shadow: 0.5rem 0.1rem 0.5rem 0px #2d2d3083;
  // -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
  @media (min-width: 1920px) {
    font-size: 1.2rem;
    // padding: 0.1rem;
    // margin-bottom: 7rem;
    padding: 1rem;
  }
  @media (max-width: 374px) {
    // font-size: 1.5rem;
    width: 230%;
  }
`;
const Span = styled.span`
  color: red;
  opacity: 0;
`;
const FormP = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  background-image: linear-gradient(305deg, #999 0%, #000 60%, transparent 50%);
  box-shadow: 0 1.5rem 4rem rgb(0 0 0 / 30%);
  color: white;
  @media (min-width: 1920px) {
    font-size: 3.5rem;
    padding: 0.1rem;
    margin-bottom: 7rem;
  }
  @media (min-width: 1536px) {
    font-size: 2.5rem;
    padding: 0.1rem;
    margin-bottom: 3rem;
  }
  @media (max-width: 374px) {
    font-size: 1.5rem;
    width: 230%;
  }
`;
const Button = styled.button`
  box-shadow: 0.5rem 0.1rem 1rem 0px #2d2d3083;
  border: none;
  padding: 0.7rem 1rem;
  margin-right: 3rem;
  border-radius: 0.5rem;
  font-weight: 900;
  font-size: 1rem;
  width: 80%;
  border: 0.1rem solid #222;
  letter-spacing: 0.2rem;
  border-radius: 0.7rem 0 0.7rem 0;
  background-color: #000;
  color: #fff;
  transition: all 0.2s;
  &: hover {
    cursor: pointer;
    // letter-spacing: 0.5rem;
    color: #888;
  }
  @media (min-width: 1920px) {
    margin-top: 3rem;
  }
  @media (max-width: 374px) {
    font-size: 0.5rem;
    width: 200%;
  }
`;
const Footer = styled.footer`
  width: 100%;
  // height: 3rem;
  background: #1b171e;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 0.9rem;
  line-height: 177.9%;
  letter-spacing: 0.01em;
  color: #ffffff;
  @media (min-width: 1920px) {
    font-size: 1.2rem;
  }
  @media (max-width: 374px) {
    // height: 70%;
  }
`;
const Footer_ul = styled.ul`
  margin-left: 2rem;
  margin-top: 0.7rem;
  margin-right: 6.7rem;
  display: flex;
  justify-content: space-between;
  text-align: center;
  list-style: none;
  @media (min-width: 375px) {
    // display: flex;
    // flex-direction: column;
  }
`;
const FooterPolicy = styled.li`
  display: flex;
  gap: 2.3rem;
  @media (min-width: 375px) {
    // display: flex;
    // flex-direction: column;
  }
`;
const FooterImg = styled(Footer)`
  display: flex;
  gap: 0.9rem;
`;
const FootImgIcon = styled.img`
  width: 30%;
  height: 1rem;
`;
function Component(props) {
  const n = [
    {
      email: "test@gmail.com",
      pass: "123456789qwerty",
    },
  ];
  const [set1, setName1] = useState("false");
  const [set2, setName2] = useState("false");
  // const [firstname, setFather] = useState("");
  // const [lastname, setMother] = useState("");
  const [otp, setOtp] = useState(false);
  const [otpID, setOtpId] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const emailRef = useRef();
  const numRef = useRef();
  const otpRef = useRef();

  const otpHandler = (event) => {
    const num = numRef.current.value;
    event.preventDefault();
    axios({
      method: "post",
      url: "https://dev.api.stocksy.app/v1/auth/otp/send",
      data: { user_id: num },
    })
      .then(function (response) {
        if (response.status == 200) {
          console.log(response?.data?.response.otp_id);
          // console.log(response.response.otp_id);
          setOtp(true);
          setOtpId(response?.data?.response.otp_id);
          dispatch(otpHandlers(response.response.otp_id));
        } else {
          return response.json().then(() => {
            let errorMessage = "Authentication failed!";
            throw new Error(errorMessage);
          });
        }
      })
      .catch((error) => {});
  };
  const validateHandler = (event) => {
    const otpNum = otpRef.current.value;
    event.preventDefault();
    axios({
      method: "post",
      url: "https://dev.api.stocksy.app/v1/auth/otp/validate",
      data: {
        otp_id: otpID,
        otp: otpNum,
      },
      withCredentials: true,
    })
      .then(function (response) {
        if (response.status === 200) {
          console.log(response.data.response);
          dispatch(showHandler(true));
          navigate("/dashboard");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const em = useSelector((state) => {
    return state.counter.email;
  });
  const pd = useSelector((state) => {
    return state.counter.password;
  });
  const onBlur1 = () => {
    setName1("true");
  };
  const onBlur2 = () => {
    setName2("true");
  };
  const handler = !otp ? otpHandler : validateHandler;
  return (
    <DivTag>
      <HeadTag>
        <ImgTag alt="Img" src={I1}></ImgTag>
      </HeadTag>
      <div>
        <SectionCard>
          <SectionImg alt="Img" src={I5} />

          <Form onSubmit={handler}>
            <FormP>Learn and Earn</FormP>
            {!otp && (
              <FormDiv>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="number"
                  ref={numRef}
                  pattern="[0-9]{10}"
                  required
                />
              </FormDiv>
            )}
            {otp && (
              <FormDiv>
                <Input
                  type="number"
                  id="phone"
                  name="phone"
                  placeholder="enter 'otp'"
                  ref={otpRef}
                  required
                />
              </FormDiv>
            )}
            {!otp && <Button type="submit">Send OTP</Button>}
            {otp && <Button type="submit">Verify OTP</Button>}
          </Form>
        </SectionCard>
      </div>
      <Footer>
        <Footer_ul>
          <FooterPolicy>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </FooterPolicy>
          <p>© Copyright ©2021 All rights reserved </p>
          <div>
            <FooterImg>
              <FootImgIcon alt="Img" src={I2}></FootImgIcon>
              <FootImgIcon alt="Img" src={I3}></FootImgIcon>
              <FootImgIcon alt="Img" src={I4}></FootImgIcon>
            </FooterImg>
          </div>
        </Footer_ul>
      </Footer>
    </DivTag>
  );
}
export default Component;
