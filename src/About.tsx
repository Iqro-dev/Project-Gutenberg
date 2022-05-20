export default function About() {
  return (
    <div className="flex flex-col justify-center items-center w-1/2 gap-4 pt-12">
      <span className="text-4xl font-['Poppins'] font-normal">
        Welcome to Project Gutenberg
      </span>

      <span className="text-2xl font-['Poppins'] font-normal">
        Project Gutenberg is a library of over 60,000 free eBooks
      </span>

      <span className="text-sm font-['Poppins'] font-normal">
        {" "}
        Choose among free epub and Kindle eBooks, download them or read them
        online. You will find the world`s great literature here, with focus on
        older works for which U.S. copyright has expired. Thousands of
        volunteers digitized and diligently proofread the eBooks, for you to
        enjoy.
      </span>
    </div>
  );
}
