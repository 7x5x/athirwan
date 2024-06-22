import { Metadata } from "next";

export const metadata: Metadata = {
  title: "سياسة الخصوصية - أثير وان للتطوير العقاري",
  description: "سياسة الخصوصية لموقع أثير وان للتطوير العقاري",
  // other metadata
};

export default function DocsPage() {
  return (
    <>
      <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-[90%] m-auto py-10">
              <div className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
                <h1>سياسة الخصوصية لأثير وان للتطوير العقاري</h1>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  نحترم في أثير وان للتطوير العقاري خصوصية مستخدمينا ونلتزم
                  بحماية معلوماتهم الشخصية. نستخدم المعلومات المجمعة لتقديم
                  وتحسين خدماتنا، ولا نشاركها مع أطراف ثالثة إلا بموجب هذه
                  السياسة.
                </p>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  نجمع المعلومات الأساسية اللازمة لتقديم خدماتنا مثل الاسم،
                  العنوان، رقم الهاتف، والبريد الإلكتروني.
                </p>
                <h2 className="text-xl font-semibold mb-2">
                  استخدام المعلومات
                </h2>
                <p>
                  نستخدم المعلومات للتواصل مع العملاء، تقديم الخدمات المطلوبة،
                  وتحسين تجربة العميل.
                </p>
                <h2 className="text-xl font-semibold mb-2">الأمان</h2>
                <p>
                  نتخذ الإجراءات الأمنية المناسبة لحماية بياناتكم من الوصول غير
                  المصرح به.
                </p>
                <h2 className="text-xl font-semibold mb-2">
                  التغييرات على السياسة
                </h2>
                <p>
                  قد نحدث تغييرات على سياسة الخصوصية هذه وسننشر التحديثات على
                  هذه الصفحة.
                </p>
                <h2 className="text-xl font-semibold mb-2">الاتصال بنا</h2>
                <p>لأي استفسارات بخصوص سياسة الخصوصية، يرجى التواصل معنا.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
