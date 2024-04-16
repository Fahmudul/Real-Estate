import toast from "react-hot-toast";

export const getAddedPropertyList = () => {
  let property = [];
  const storedProperty = localStorage.getItem("property");
  if (storedProperty) {
    property = JSON.parse(storedProperty);
  }
  return property;
};

export const saveProperty = (property) => {
  let properties = getAddedPropertyList();
  const isExist = properties?.find((propety) => propety.id == property.id);
  if (isExist) {
    return toast.error("Already added in cart");
  }
  properties.push(property);
  localStorage.setItem("property", JSON.stringify(properties));
  toast.success("Added property in cart successfully");
};
