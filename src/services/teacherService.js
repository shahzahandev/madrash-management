import axiosInstance from "../utils/axiosInstance";

export const getTeachers = async () => {
  const { data } = await axiosInstance.get("/teachers");
  return data;
};

export const createTeacher = async (teacherData) => {
  const { data } = await axiosInstance.post("/teachers", teacherData);
  return data;
};

export const updateTeacher = async (id, teacherData ) => {
  const { data } = await axiosInstance.put( `/teachers/${id}`, teacherData);
  return data;
};

export const deleteTeacher = async (id) => {
  const { data } = await axiosInstance.delete( `/teachers/${id}`);
  return data;
};

export const getTeacherById = async (id) => {
  const { data } = await axiosInstance.get( `/teachers/${id}`);
  return data;
};