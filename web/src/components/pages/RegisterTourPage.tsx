export const RegisterTourPage = () => {
  return (
    <>
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-white mb-4">
            註冊參加導覽團
            {/* Register for Your Tour */}
          </h2>
          <p className="text-base text-gray-200">
            填寫表格並預訂您的位置
            {/* Fill out the form and reserve your spot */}
          </p>
        </div>
        <iframe
          src="https://tally.so/embed/EkL6VB?hideTitle=1&dynamicHeight=1"
          width="100%"
          height="807"
          title="JoinMi Booking Form"
          className="rounded-lg"
        />
      </div>
    </>
  );
};
