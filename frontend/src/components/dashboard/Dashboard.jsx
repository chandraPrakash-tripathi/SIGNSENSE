
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSignData, fetchTopUsers } from "../../redux/actions/signdataaction";
import ChartComp from "./Chart/ChartComp";

import GoldTrophy from "../../assests/gold.png";
import SilverTrophy from "../../assests/silver.png";
import BronzeTrophy from "../../assests/bronze.png";
import NoData from "../../assests/No-data.svg";

import { quote } from "../../data/quotes";
import Spinner from "../Spinner/Spinner";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const dispatch = useDispatch();
 
  const navigate = useNavigate();

  const { loading: authLoader ,accessToken } = useSelector((state) => state.auth);

  useEffect(() => {
    console.log("authLoader:", authLoader);
  console.log("accessToken:", accessToken);
    if (!authLoader && !accessToken) {
      navigate("/");
    }
    dispatch(fetchSignData());
    dispatch(fetchTopUsers());
  }, [accessToken, authLoader, navigate,dispatch]);

  useEffect(() => {
    dispatch(fetchSignData());
    dispatch(fetchTopUsers());
  }, [dispatch]);

  const { signDataList =[], loading } = useSelector((state) => state.signData || {});

  const { topUsers = [] } = useSelector((state) => state.topUsers || {});

  console.log("Sign Data List:", signDataList);
  console.log("Top Users:", topUsers);

  

  //create a new object array which contains only signs performed array
  const list = signDataList
    .map((data) => data.signsPerformed)
    .reduce((acc, val) => acc.concat(val), []);

  //add the counts of same sign values
  const newData = [];
  for (let i = 0; i < list.length; i++) {
    if (!list[i] || !list[i].SignDetected) continue;
    const foundIndex = newData.findIndex(
      (d) => d.SignDetected === list[i].SignDetected
    );
    if (foundIndex === -1) {
      newData.push({ ...list[i] , count: list[i].count || 0 });
    } else {
      newData[foundIndex].count += list[i].count || 0;
    }
  }

  const TopFiveSignsObject = newData
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);

  return (
    <div className="flex justify-around items-center mx-8 my-4">
      {!(loading || authLoader) ? (
        signDataList.length > 0 ? (
          <>
            <div className="flex justify-around items-center mx-8 my-4">
              <ChartComp signDataList={signDataList} />

              <div className="flex flex-col justify-between items-center">
                <h2 className="text-xl font-semibold mb-6">Our Top Users</h2>
                <div className="mb-12 w-[350px] h-[250px] shadow-custom1 border border-gray-300 rounded-lg">
                  {topUsers.map((user, index) => (
                    <div className="flex justify-between items-center px-6 py-7" key={index * 786}>
                      <h2 className="text-orange-600 font-extrabold text-lg">{user.rank}</h2>
                      <h3 className="text-black font-medium text-lg">{user.username}</h3>
                      <img className="w-10 h-10"
                        src={
                          user.rank === 1
                            ? GoldTrophy
                            : user.rank === 2
                            ? SilverTrophy
                            : user.rank === 3
                            ? BronzeTrophy
                            : ""
                        }
                        alt="trophy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="my-8 mx-4">
              <div >
                <h2 className="text-2xl font-bold mb-6">Your Most Practiced Signs</h2>

                <table className="table-auto w-full text-left border-collapse">
                  <tr>
                    <th className="border px-4 py-2">Sr.No</th>
                    <th className="border px-4 py-2">Signs</th>
                    <th className="border px-4 py-2">Frequency</th>
                  </tr>

                  {TopFiveSignsObject.map((data, i) => (
                    <tr key={i * 111} className="sign-row">
                      <td>{i + 1}</td>
                      <td>{data.SignDetected}</td>
                      <td>{data.count} times</td>
                    </tr>
                  ))}
                </table>
              </div>

              <div className="signlang_quotes-box">
                <h2 className="gradient__text">Quote of the Day</h2>
                <div>
                  <blockquote>{quote.quote}</blockquote>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="flex flex-col justify-center items-center h-screen">
            <img className="h-96 w-96 mb-4" src={NoData} alt="no-data" />
            <h3 className="text-black text-center text-lg font-serif font-bold">
              No Data to Display please go back to Detect to Mark Your Learning
            </h3>
          </div>
        )
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default Dashboard;
