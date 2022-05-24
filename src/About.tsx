export default function About() {
  return (
    <div className="flex justify-center w-full gap-4 pt-12 pb-12">
      <div className="flex flex-col justify-center items-center xl:w-1/2 px-12 gap-8">
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

        <span className="text-sm font-['Poppins'] font-normal">
          <span className="font-semibold">50 years of eBooks 1971-2021.</span>{" "}
          In 2021, Project Gutenberg celebrated the first eBook for reading
          enjoyment and unlimited free redistribution. This eBook was created on
          July 4, 1971 by Project Gutenberg’s founder, Michael S. Hart. Read
          more about this lasting innovation. Project Gutenberg is grateful to
          all volunteers who helped to reach this milestone anniversary. Project
          Gutenberg offers a vibrant and growing collection of the world’s great
          literature. Read, enjoy, and share!
        </span>

        <span className="text-sm font-['Poppins'] font-normal">
          <span className="font-semibold">No fee or registration!</span>{" "}
          Everything from Project Gutenberg is gratis, libre, and completely
          without cost to readers. If you find Project Gutenberg useful, please
          consider a small donation to help Project Gutenberg digitize more
          books, maintain its online presence, and improve Project Gutenberg
          programs and offerings. Other ways to help include digitizing,
          proofreading and formatting, or reporting errors.
        </span>

        <span className="text-sm font-['Poppins'] font-normal">
          <span className="font-semibold">No special apps needed! </span>Project
          Gutenberg eBooks require no special apps to read, just the regular Web
          browsers or eBook readers that are included with computers and mobile
          devices. There have been reports of sites that charge fees for custom
          apps, or for the same eBooks that are freely available from Project
          Gutenberg. Some of the apps might have worthwhile features, but none
          are required to enjoy Project Gutenberg eBooks.
        </span>

        <div className="flex flex-col justify-center items-center gap-4 w-full">
          <span className="text-4xl font-['Poppins'] font-normal">
            Social Media
          </span>

          <div className="flex gap-4 items-center justify-center">
            <a
              href="https://www.facebook.com/project.gutenberg"
              className="hover:underline"
            >
              Facebook
            </a>

            <a
              href="https://twitter.com/gutenberg_org"
              className="hover:underline"
            >
              Twitter
            </a>
          </div>

          <span className="text-4xl font-['Poppins'] font-normal">
            New eBooks
          </span>

          <div className="flex gap-4 items-center justify-center">
            <a
              href="https://www.facebook.com/gutenberg.new"
              className="hover:underline"
            >
              Facebook News
            </a>

            <a
              href="https://twitter.com/gutenberg_new"
              className="hover:underline"
            >
              Twitter News
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
