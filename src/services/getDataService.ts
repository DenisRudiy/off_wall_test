export const getData = async () => {
  try {
    const response = await fetch(`https://demo3005513.mockable.io/web/modes`);
    const result = await response.json();
    // console.log(result);
    return result;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
