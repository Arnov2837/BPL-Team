import React from 'react';

const CopyRightFooter = () => {
  return (
    <div className='container mx-auto pt-2'>

       <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by BPL-Team</p>
  </aside>
</footer>
      
    </div>
  );
};

export default CopyRightFooter;