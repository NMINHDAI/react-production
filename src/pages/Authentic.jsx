import React, { useState } from "react";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import axios from "axios";
import backendUrl from "../backendUrl";
import { Oval } from "react-loader-spinner";
import page404 from "../assets/page404.png";

const Authentic = ({ isMobile }) => {
  const [authId, setAuthId] = useState(null);
  const [authInfo, setAuthInfo] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setAuthId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAuthInfo(null);
    setLoading(true);

    if (authId !== null) {
      try {
        const { data } = await axios.get(
          `${backendUrl}/api/authenticity/${authId}`
        );
        if (data) {
          setLoading(false);
          setNotFound(false);
        }
        setAuthInfo(data?.data);
      } catch (error) {
        setLoading(false);
        setNotFound(true);
      }
    }
  };

  return (
    <div className="flex flex-col items-center mb-20 mt-[75px] md:mt-30 ">
      <h1 className="font-semibold text-[40px] text-center mb-[4rem] md:text-[60px]">
        Kiểm tra hàng {isMobile && <br />} chính hãng
      </h1>
      <h3 className="font-medium text-[22px]">Mã chống hàng giả *</h3>
      <form
        onSubmit={handleSubmit}
        className=" px-4 flex flex-col items-center justify-center mb-2"
      >
        <div className="max-w-lg flex items-center justify-center mb-6">
          <input
            className="border-2 text-center text-[21px] px-[1.8rem] py-2 md:py-3 font-semibold leading-loose rounded-[6px] shadow-xl mt-4 md:text-2xl md:px-48"
            required
            onChange={handleInputChange}
          />
        </div>
        <button
          className="check-auth mt-8 mb-6 md:mb-[70px] cursor-pointer border-2 border-black px-12 py-1 rounded-[30px] shadow-[grey] shadow-md hover:bg-black hover:text-white ease-in-out duration-300 md:py-[8px] md:text-lg md:px-16 md:mt-20 "
          type="submit"
        >
          <p className="font-medium text-[22px]">Kiểm tra</p>
        </button>
      </form>

      {loading && (
        <div className="mt-10">
          {isMobile ? (
            <Oval height="50" width="50" radius="9" color="#000" />
          ) : (
            <Oval height="80" width="80" radius="9" color="#000" />
          )}
        </div>
      )}

      {authInfo && !loading && !notFound && (
        <>
          <section className="description-auth mt-5  title flex justify-end items-center ">
            <div className="mb-5">
              <ul className="mr-1 flex flex-col items-end text-sm md:text-lg font-extralight text-[15px] ">
                <li className="auth-item font-semibold">Mã chống hàng giả:</li>
                <li className="auth-item">Sản phẩm:</li>
                <li className="auth-item">Giá trị sản phẩm:</li>
                <li className="auth-item">Ngày xuất kho:</li>
              </ul>

              <ul className="mr-1 flex flex-col mt-[25px] md:mt-[50px] items-end text-sm md:text-lg font-extralight text-[15px] ">
                <li className="auth-item ">Đơn vị phân phối:</li>
                <li className="auth-item">Địa chỉ phân phối:</li>
              </ul>
              <ul className="mr-1 flex flex-col items-end pt-7 text-sm md:text-lg md:mt-5 font-extralight text-[15px] ">
                <li className="auth-item font-semibold">Chủ sở hữu:</li>
                <li className="auth-item">Địa chỉ:</li>
                <li className="auth-item font-semibold">Số điện thoại:</li>
                <li className="auth-item">Ngày bắt đầu sở hữu:</li>
                <li className="auth-item">Ngày hiện tại:</li>
                <li className="auth-item">Số ngày sở hữu:</li>
              </ul>
            </div>

            <div className="pl-2 mb-5">
              <ul className="font-semibold text-sm md:text-lg text-[15px]">
                <li className="auth-item">{authInfo?.maChongHangGia}</li>
                <li className="auth-item">{authInfo?.sanPham}</li>
                <li className="auth-item">{authInfo?.giaTriSanPham}</li>
                <li className="auth-item">{authInfo?.ngayXuatKho}</li>
              </ul>

              <ul className="font-semibold mt-[25px] md:mt-[50px] text-sm md:text-lg text-[15px]">
                <li className="auth-item">{authInfo?.donViPhanPhoi}</li>
                <li className="auth-item">{authInfo?.diaChiPhanPhoi}</li>
              </ul>

              <ul className="pt-7 font-semibold text-sm md:text-lg md:mt-5 text-[15px]">
                {authInfo && authInfo.chuSoHuu !== "đang cập nhật" ? (
                  <>
                    <li className="auth-item">{authInfo?.chuSoHuu}</li>
                  </>
                ) : (
                  <>
                    <li className="auth-item italic font-thin">
                      Đang cập nhật...
                    </li>
                  </>
                )}
                {/* <li className="py-[0.2px] ">{authInfo?.chuSoHuu}</li> */}
                <li className="auth-item">{authInfo?.diaChi}</li>
                <li className="auth-item">{authInfo?.soDienThoai}</li>
                <li className="auth-item">{authInfo?.ngayBatDauSoHuu}</li>
                <li className="auth-item">{authInfo?.ngayHienTai}</li>
                <li className="auth-item">{authInfo?.soNgaySoHuu}</li>
              </ul>
            </div>
          </section>
        </>
      )}

      {notFound && !loading && (
        <div className="mt-1 w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
          <img src={page404} alt="not found" />
        </div>
      )}

      <section className="mt-10 flex text-lg gap-2 ">
        <BsFacebook className="cursor-pointer" size={"25px"} />
        <AiOutlineTwitter className="cursor-pointer" size={"25px"} />
        <AiFillYoutube className="cursor-pointer" size={"25px"} />
        <AiFillInstagram className="cursor-pointer" size={"25px"} />
      </section>
    </div>
  );
};

export default Authentic;
