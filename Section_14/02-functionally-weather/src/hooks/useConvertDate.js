const useConvertDate = (string) => {
  return new Intl.DateTimeFormat('en', {
    weekday: 'short',
  }).format(new Date(string));
};

export default useConvertDate;
