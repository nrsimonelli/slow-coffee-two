const ThemeBackground = ({ children }) => {
  return (
    // Remove transition-all to disable the background color transition.
    <div className='bg-primary-300 dark:bg-primary-600 transition-all'>
      {children}
    </div>
  );
};

export default ThemeBackground;
