import { createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../../firebase.js'
import { collection, getDocs, doc, setDoc, where, query } from 'firebase/firestore';
import Cookies from 'js-cookie';

export const fetchSignData = createAsyncThunk('sign/fetchSignData', async (_, { rejectWithValue }) => {
  try {
    const loggedInUser = JSON.parse(Cookies.get('signsense-eccb4-user'));
    const noteCol = collection(db, 'SignData');
    const userSpecificData = query(noteCol, where('userId', '==', loggedInUser.userId));
    const noteSnapshot = await getDocs(userSpecificData);
    const signData = noteSnapshot.docs.map((doc) => doc.data());
    console.log("Fetched Sign Data:", signData);
    return signData;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const addSignData = createAsyncThunk('sign/addSignData', async (data, { rejectWithValue }) => {
  try {
    await setDoc(doc(db, 'SignData', data.id), {
      userId: data.userId,
      id: data.id,
      username: data.username,
      createdAt: data.createdAt,
      signsPerformed: data.signsPerformed,
      secondsSpent: data.secondsSpent,
    });
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const fetchTopUsers = createAsyncThunk('topSignUsers/fetchTopUsers', async (_, { rejectWithValue }) => {
  try {
    const noteCol = collection(db, 'SignData');
    const noteSnapshot = await getDocs(noteCol);
    const allData = noteSnapshot.docs.map((doc) => doc.data());

    const groupedData = allData.reduce((acc, curr) => {
      if (!acc[curr.username]) {
        acc[curr.username] = [];
      }
      acc[curr.username].push(curr);
      return acc;
    }, {});

    let uniqueData = Object.values(groupedData).map((group) =>
      group.reduce((maxObj, obj) =>
        obj.signsPerformed.reduce((acc, curr) => acc + curr.count, 0) >
        maxObj.signsPerformed.reduce((acc, curr) => acc + curr.count, 0)
          ? obj
          : maxObj
      )
    );

    uniqueData.sort(
      (a, b) =>
        b.signsPerformed.reduce((acc, curr) => acc + curr.count, 0) -
        a.signsPerformed.reduce((acc, curr) => acc + curr.count, 0)
    );

    uniqueData = uniqueData.slice(0, 3);

    uniqueData.forEach((obj, index) => {
      obj.rank = index + 1;
    });

    const dataForRankBoard = uniqueData.map((obj) => ({
      username: obj.username,
      rank: obj.rank,
    }));

    return dataForRankBoard;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});
