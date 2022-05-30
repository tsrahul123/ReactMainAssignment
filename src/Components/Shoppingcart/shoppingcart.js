import React, { useState, useMemo, useEffect } from "react";
import Layout from "../Layout";
import { courseData } from "./cartData";
import Pagination from "../Global/Pagination/Pagination";
import { Button, Rate, Select, Modal } from "antd";
import { RightOutlined, MinusCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Input, Space } from "antd";

const { Option } = Select;

const cartPage = ({ data = courseData }) => {
  let PageSize = 5;
  const [cartData, setcartData] = useState([]);
  const [cartPrice, setcartPrice] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const updatedData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, cartData]);

  const addCartData = (cartItem) => {
    setcartData([...cartData, cartItem]);
  };

  const removeCartItem = (itemTag) => {
    setcartData(cartData.filter((item) => item.tag != itemTag));
  };

  const addOBJtoLocal = (item) => {
    window.localStorage.setItem("descItem", JSON.stringify(item));
  };

  useEffect(() => {
    let price;
    price = cartData.reduce((accumulator, object) => {
      return accumulator + object.disPrice;
    }, 0);
    setcartPrice(price);
    console.log("Cart Data======>>>>>", cartData, cartPrice);
  }, [cartData]);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <Layout>
      <section className="relative py-24 min-h-max px-5 lg:px-28 bg-slate-200">
        <div className="grid grid-cols-4 gap-3 md:gap-4 mt-7">
          <div className="col-span-3">
            <div className="flex items-center justify-between">
              <p className="text-2xl font-bold m-0 p-0">All Courses</p>
            </div>
            {updatedData != null ? (
              updatedData.map((item, key) => (
                <div
                  key={key}
                  className="mt-5 bg-white w-full p-3 h-20 drop-shadow-md hover:drop-shadow-xl flex items-center"
                >
                  <Link to="/detailsPage">
                    <img
                      src={item.courseIMG}
                      alt="article"
                      className="h-14 w-14 mr-8 cursor-pointer"
                      onClick={() => addOBJtoLocal(item)}
                    />
                  </Link>
                  <p className="custom_truncate text-base flex-1 max-w-[350px] mr-8 mb-0 max-h-12">
                    {item.name}
                  </p>
                  <div className="flex-1 max-w-[150px] mr-8">
                    <div className="flex items-center justify-between">
                      <p className="font-normal text-sm  max-w-[100px] mr-10">
                        {item.author}
                      </p>
                      <Rate count={1} allowClear />
                    </div>
                  </div>
                  <div className="flex-1 max-w-[200px]">
                    <div className="flex">
                      <p className="font-extrabold text-sm mr-8">
                        Rs. {item.disPrice}/-
                      </p>
                      <p className="font-normal line-through text-sm mr-8">
                        {item.orgPrice == null
                          ? `--`
                          : `Rs. ${item.orgPrice}/-`}
                      </p>
                    </div>
                  </div>
                  <div className="flex-1 max-w-[150px]">
                    <div className="flex items-center justify-between">
                      <Button
                        className="uppercase custom_add_btn"
                        onClick={() => addCartData(item)}
                      >
                        Add to Cart
                      </Button>
                      <RightOutlined />
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-2xl font-bold m-0 p-0">No Courses Found :-(</p>
            )}
          </div>
          <div className="col-span-1">
            <div>Search comp</div>
            <div className="mt-5 bg-white w-full p-3 drop-shadow-md hover:drop-shadow-xl h-[140px]">
              <p className="text-lg font-normal pb-3 border-b-2 border-black p-0 ">
                {cartData.length != 0
                  ? `Your Cart ( ${cartData.length} )`
                  : `Your Cart`}
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-normal pt-3 p-0 ">
                    Total Cart Value
                  </p>
                  <p className="text-2xl font-bold">Rs. {cartPrice}/-</p>
                </div>
                <Button
                  className="uppercase custom_add_btn"
                  onClick={showModal}
                >
                  Checkout
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Modal
        title="Info"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>You have successfully placed your order</p>
      </Modal>
    </Layout>
  );
};

export default cartPage;
