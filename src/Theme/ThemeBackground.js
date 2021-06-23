const ThemeBackground = ({ children }) => {
  return (
    // Remove transition-all to disable the background color transition.
    <div className='bg-blue-100 dark:bg-blue-600 transition-all'>
      {children}
    </div>
  );
};

export default ThemeBackground;
