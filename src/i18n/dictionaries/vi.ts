/**
 * Vietnamese copy — the source of truth for the Dictionary shape.
 * All wording is original to TLSHost.
 */
const vi = {
  meta: {
    siteName: "TLSHost",
    tagline: "Phần mềm vận hành cho chủ chỗ nghỉ độc lập",
    home: {
      title: "TLSHost — Phần mềm vận hành cho chủ chỗ nghỉ độc lập",
      description:
        "Một lịch cho toàn bộ danh mục, kênh OTA tự đồng bộ mỗi giờ, trang đặt phòng riêng không mất hoa hồng, và một trợ lý AI chỉ hành động khi bạn duyệt.",
    },
    features: {
      title: "Tính năng",
      description:
        "Lịch vận hành hợp nhất, đồng bộ iCal hai chiều, trợ lý AI có kiểm soát, trang đặt phòng trực tiếp, điều phối buồng phòng và phân quyền đội ngũ.",
    },
    pricing: {
      title: "Bảng giá",
      description:
        "Thuê bao cố định, không thu hoa hồng trên bất kỳ lượt đặt nào. Bắt đầu miễn phí trọn đời, nâng cấp khi danh mục của bạn lớn lên.",
    },
  },

  nav: {
    features: "Tính năng",
    pricing: "Bảng giá",
    login: "Đăng nhập",
    start: "Dùng thử miễn phí",
    openMenu: "Mở menu điều hướng",
    closeMenu: "Đóng menu điều hướng",
    langLabel: "Chọn ngôn ngữ",
    skipToContent: "Chuyển tới nội dung chính",

    /* The features dropdown. `slug` keys both the route and the glyph — the
       icon map lives in the menu component, not here, because a dictionary
       should carry words rather than component names. */
    menuLabel: "Nền tảng",
    allFeatures: "Xem tất cả tính năng",
    menu: [
      { slug: "calendar", title: "Lịch & vận hành", blurb: "Mọi chỗ nghỉ, mọi đặt phòng — một bảng." },
      { slug: "ai-agent", title: "Trợ lý AI vận hành", blurb: "Soạn sẵn việc lặt vặt. Chờ bạn duyệt." },
      { slug: "channel-manager", title: "Đồng bộ kênh", blurb: "Từ Airbnb đến Agoda, luôn khớp nhau." },
      { slug: "direct-booking", title: "Trang đặt phòng trực tiếp", blurb: "Cửa hàng của riêng bạn. Không hoa hồng." },
      { slug: "housekeeping", title: "Ứng dụng buồng phòng", blurb: "Nhân viên thấy ngay phòng cần dọn, trên mọi điện thoại." },
      { slug: "team", title: "Đội ngũ & phân quyền", blurb: "Quyền truy cập rõ ràng, trách nhiệm minh bạch." },
    ],
  },

  hero: {
    eyebrow: "Phần mềm vận hành cho chủ chỗ nghỉ độc lập",
    body: "TLSHost gom lịch, kênh bán, buồng phòng và thanh toán về cùng một chỗ. Kênh OTA tự khớp mỗi giờ. Trợ lý AI chuẩn bị sẵn từng thao tác — và không đụng vào dữ liệu của bạn cho tới khi bạn bấm duyệt.",
    ctaPrimary: "Dùng thử miễn phí",
    ctaSecondary: "Xem tính năng",
    notes: [
      "Gói miễn phí trọn đời",
      "Không cần thẻ tín dụng",
      "Sẵn sàng đón khách trong vài phút",
    ],

    /* The hero picker. Choosing a job rewrites the <h1>, the line under the
       grid and the status chip, so the headline is the host's own answer
       rather than ours. Each job carries its own headline: one frame stretched
       across six jobs reads worse than six written for the job they describe.
       `id` keys the icon in Hero.tsx — renaming one here needs it renamed there. */
    pickerTitle: "Bạn muốn TLSHost lo việc gì trước?",
    jobs: [
      {
        id: "calendar",
        label: "Lịch & đặt phòng",
        titleLead: "Cả danh mục,",
        titleEmphasis: "trên một lịch.",
        line: "Mọi chỗ nghỉ, mọi loại phòng, mọi đêm — trên một bảng.",
        chipTitle: "Đặt phòng mới",
        chipNote: "Đã vào lịch · 2 giây trước",
      },
      {
        id: "channels",
        label: "Đồng bộ kênh OTA",
        titleLead: "Bán một đêm,",
        titleEmphasis: "khóa mọi kênh.",
        line: "iCal hai chiều với mọi OTA lớn, khớp lại mỗi giờ.",
        chipTitle: "Đồng bộ xong",
        chipNote: "6 kênh · vừa xong",
      },
      {
        id: "ai",
        label: "Trợ lý AI vận hành",
        titleLead: "AI soạn.",
        titleEmphasis: "Bạn duyệt.",
        line: "Trả lời khách, báo giá, nhắc việc — soạn sẵn, không tự gửi.",
        chipTitle: "3 việc chờ duyệt",
        chipNote: "Chưa gửi đi đâu cả",
      },
      {
        id: "housekeeping",
        label: "Dọn phòng & bảo trì",
        titleLead: "Khách đi,",
        titleEmphasis: "tổ dọn biết ngay.",
        line: "Lịch dọn tự sinh theo từng lượt trả phòng, giao đúng người.",
        chipTitle: "Phòng 204 đã sạch",
        chipNote: "Sẵn sàng đón khách",
      },
      {
        id: "direct",
        label: "Trang đặt phòng trực tiếp",
        titleLead: "Khách đặt thẳng,",
        titleEmphasis: "0% hoa hồng.",
        line: "Trang đặt phòng tên bạn, nhận thanh toán, đổ về cùng cái lịch.",
        chipTitle: "Đặt phòng trực tiếp",
        chipNote: "0% hoa hồng",
      },
      {
        id: "team",
        label: "Đội ngũ & phân quyền",
        titleLead: "Giao việc,",
        titleEmphasis: "đừng giao mật khẩu.",
        line: "Mỗi người một tài khoản, chỉ thấy đúng phần việc của mình.",
        chipTitle: "Đã mời lễ tân",
        chipNote: "Quyền: chỉ xem lịch",
      },
    ],
  },

  channels: {
    eyebrow: "Đồng bộ với nơi bạn đang bán",
    title: "Bán ở mọi kênh. Không phải đối soát ở đâu cả.",
    body: "Kết nối iCal hai chiều với mọi OTA lớn. Một đêm được bán ở bất kỳ đâu sẽ tự khóa ở tất cả những nơi còn lại.",
    names: ["Airbnb", "Booking.com", "Agoda", "Traveloka", "Trip.com", "Expedia", "VRBO"],
  },

  platform: {
    eyebrow: "Nền tảng",
    title: "Hàng trăm đầu việc mỗi ngày. Một người quyết định: bạn.",
    body: "Bảng tính, sáu tab đăng nhập kênh và một nhóm chat — TLSHost thay tất cả bằng một không gian làm việc duy nhất, tự chạy suốt ngày rồi báo cáo lại cho bạn.",
  },

  pillars: {
    calendar: {
      eyebrow: "Lịch & vận hành",
      title: "Chiếc lịch tự vận hành cơ ngơi của bạn",
      body: "Một bảng nhiều ngày, cuộn mượt, hiển thị mọi đặt phòng, lịch khóa, loại phòng và tình trạng dọn dẹp trên tất cả chỗ nghỉ. Tạo và sửa ngay trên bảng, không cần mở thêm màn hình nào.",
      bullets: [
        "Xem đồng thời nhiều chỗ nghỉ và nhiều loại phòng",
        "Tạo, kéo và sửa đặt phòng trực tiếp trên bảng",
        "Tình trạng buồng phòng hiện ngay trên từng ô",
        "Công suất, doanh thu và lượt nhận phòng cập nhật tức thì",
      ],
      link: "Tìm hiểu lịch vận hành",
    },
    ai: {
      eyebrow: "Trợ lý AI",
      title: "Bạn mô tả. Trợ lý soạn. Bạn duyệt.",
      body: "Một trợ lý hội thoại nằm ngay trong không gian làm việc. Nhờ nó khóa phòng, đổi giá, tạo đặt phòng hay ghi nhận thanh toán — nó dựng sẵn thay đổi, cho bạn xem trước chính xác từng dòng, rồi đứng chờ.",
      bullets: [
        "Ra lệnh bằng tiếng Việt đời thường, không cần cú pháp",
        "Mọi đề xuất kèm bản xem trước đầy đủ trước khi áp dụng",
        "Không thay đổi nào được ghi nếu bạn chưa duyệt",
        "Đặt hạn mức tự duyệt cho việc nhỏ, giữ quyền quyết định việc lớn",
      ],
      link: "Tìm hiểu trợ lý AI",
    },
    channels: {
      eyebrow: "Đồng bộ kênh",
      title: "Kênh nào cũng đúng, mọi lúc",
      body: "Nhập và xuất iCal hai chiều với Airbnb, Booking.com, Agoda, Traveloka và bất kỳ OTA nào hỗ trợ iCal. Tình trạng phòng chảy theo cả hai chiều, làm mới mỗi giờ.",
      bullets: [
        "Đồng bộ hai chiều, cả nhập lẫn xuất",
        "Tự làm mới mỗi giờ, không cần bấm tay",
        "Hỗ trợ mọi OTA có iCal",
        "Chặn trùng phòng trước khi nó kịp xảy ra",
      ],
      link: "Tìm hiểu đồng bộ kênh",
    },
    direct: {
      eyebrow: "Đặt phòng trực tiếp",
      title: "Cửa hàng của riêng bạn, giữ trọn 100%",
      body: "Mỗi chỗ nghỉ có một trang đặt phòng mang thương hiệu của bạn trên đường link riêng. Khách chọn ngày, đặt và nhận xác nhận tức thì. Đặt phòng đổ thẳng vào cùng chiếc lịch.",
      bullets: [
        "Trang đặt phòng theo thương hiệu của bạn",
        "Không một đồng hoa hồng trên mỗi lượt đặt",
        "Xác nhận tức thì cho khách",
        "Link công khai riêng cho từng chỗ nghỉ",
      ],
      link: "Tìm hiểu đặt phòng trực tiếp",
    },
    housekeeping: {
      eyebrow: "Buồng phòng",
      title: "Đội dọn phòng luôn biết việc kế tiếp",
      body: "Mỗi lượt trả phòng tự sinh ra một việc cần dọn. Nhân viên mở điện thoại là thấy đúng phần việc của mình, chạm một lần để báo sạch, và bảng lịch cập nhật ngay lập tức.",
      bullets: [
        "Tự chuyển sang trạng thái cần dọn ngay khi khách trả phòng",
        "Giao diện thiết kế cho điện thoại, dùng được bằng một tay",
        "Một chạm báo sạch, cả đội thấy tức thì",
        "Nhân viên chỉ thấy đúng phòng được giao",
      ],
      link: "Tìm hiểu buồng phòng",
    },
    team: {
      eyebrow: "Đội ngũ & phân quyền",
      title: "Giao việc mà vẫn nắm được toàn cảnh",
      body: "Mỗi cộng tác viên chỉ nhìn thấy những chỗ nghỉ và loại phòng bạn giao. Bạn quyết định ai được sửa đặt phòng của ai, và luôn biết ai đã tạo ra từng bản ghi.",
      bullets: [
        "Phân quyền tới từng chỗ nghỉ và từng loại phòng",
        "Kiểm soát quyền sửa đặt phòng của người khác",
        "Nhật ký ghi rõ ai tạo, ai sửa, vào lúc nào",
        "Cổng riêng cho cộng tác viên, giới hạn trong phạm vi được giao",
      ],
      link: "Tìm hiểu phân quyền",
    },
  },

  scale: {
    eyebrow: "Từ một căn đến cả danh mục",
    title: "Bắt đầu với một chỗ nghỉ. Lớn lên không phải đổi công cụ.",
    body: "Cùng một không gian làm việc phục vụ một căn hộ cho thuê hay ba mươi căn villa. Bạn thêm chỗ nghỉ, thêm người, thêm kênh — nền tảng giãn ra theo.",
    tiers: [
      {
        label: "Chủ nhà cá nhân",
        title: "Đủ thứ cần dùng. Không thứ gì thừa.",
        body: "Một chiếc lịch, một trang đặt phòng riêng, và không hoa hồng. Làm chủ nhà mà không phải sống trong bảng tính.",
        points: ["Lịch hợp nhất", "Trang đặt phòng riêng", "0% hoa hồng, vĩnh viễn"],
        link: "Xem đặt phòng trực tiếp",
      },
      {
        label: "Đội ngũ đang lớn",
        title: "Một cộng sự lo phần việc lặp lại",
        body: "Để trợ lý AI soạn thảo, để đồng bộ tự chạy, và giao cho từng người đúng phạm vi họ phụ trách.",
        points: ["Trợ lý AI vận hành", "Phân quyền theo phạm vi", "Đồng bộ kênh mỗi giờ"],
        link: "Xem trợ lý AI",
      },
      {
        label: "Danh mục lớn",
        title: "Quy mô lớn vẫn nắm được chi tiết",
        body: "Theo dõi nguồn gốc từng đặt phòng, phân quyền chi tiết tới loại phòng, và số liệu gộp trên toàn danh mục.",
        points: ["Số liệu đa chỗ nghỉ", "Nhật ký người tạo", "Phân quyền chi tiết"],
        link: "Xem phân quyền đội ngũ",
      },
    ],
  },

  stats: {
    items: [
      {
        value: "0%",
        caption: "Cam kết",
        label: "Hoa hồng trên đặt phòng trực tiếp, ở mọi gói",
      },
      {
        value: "60′",
        caption: "iCal hai chiều",
        label: "Chu kỳ đồng bộ với mọi kênh OTA đã kết nối",
      },
      {
        value: "24/7",
        caption: "Bạn giữ quyền duyệt",
        label: "Một cộng sự không bao giờ hết ca trực",
      },
    ],
  },

  testimonials: {
    eyebrow: "Chủ nhà đang dùng TLSHost",
    title: "Người thật. Con số thật.",
    items: [
      {
        quote:
          "Trước đây tôi mở bốn tab và một file Excel mỗi sáng. Giờ chỉ mở TLSHost. Lịch cuối cùng cũng là chỗ duy nhất tôi cần tin.",
        name: "Trần Mai",
        role: "Chủ nhà, Riverside Villa",
      },
      {
        quote:
          "Trợ lý soạn sẵn, tôi đọc rồi bấm duyệt. Mỗi ngày tiết kiệm khoảng một tiếng, mà không phải lo nó tự ý làm gì.",
        name: "Đặng Quốc Huy",
        role: "Quản lý vận hành, 12 căn",
      },
      {
        quote:
          "Trang đặt phòng riêng hoàn vốn thuê bao ngay tuần đầu. Mỗi lượt khách đặt thẳng là tôi giữ thêm gần sáu trăm nghìn.",
        name: "Phạm Linh",
        role: "Chủ nhà, Old Quarter Stays",
      },
    ],
  },

  faq: {
    title: "Trước khi bạn hỏi",
    items: [
      {
        q: "TLSHost có thu hoa hồng trên đặt phòng không?",
        a: "Không, ở mọi gói. TLSHost là thuê bao cố định theo tháng. Mọi lượt khách đặt qua trang trực tiếp của bạn đều thuộc về bạn trọn vẹn, không trừ đồng nào.",
      },
      {
        q: "Trợ lý AI có tự ý thay đổi dữ liệu không?",
        a: "Không bao giờ. Trợ lý chỉ dựng bản nháp và trình bày chính xác những gì sẽ thay đổi. Không dòng dữ liệu nào được ghi cho tới khi bạn bấm duyệt. Bạn cũng có thể đặt hạn mức để việc nhỏ chạy tự động và giữ quyền duyệt cho việc lớn.",
      },
      {
        q: "Tôi kết nối được những kênh nào?",
        a: "Bất kỳ OTA nào hỗ trợ iCal — trong đó có Airbnb, Booking.com, Agoda, Traveloka, Expedia và VRBO. Kết nối chạy hai chiều và tự làm mới mỗi giờ.",
      },
      {
        q: "Chuyển dữ liệu cũ sang có mất nhiều công không?",
        a: "Thiết lập có hướng dẫn từng bước cho phòng, giá, tiện nghi và chính sách. Đặt phòng đang có được kéo về qua chính link iCal của các kênh, nên bạn không phải nhập tay.",
      },
    ],
  },

  cta: {
    title: "Giành lại quyền kiểm soát cơ ngơi của bạn.",
    body: "Thiết lập chỗ nghỉ đầu tiên và nhận lượt đặt trực tiếp ngay hôm nay. Miễn phí để bắt đầu, không cần thẻ.",
    primary: "Dùng thử miễn phí",
    secondary: "Xem bảng giá",
  },

  footer: {
    tagline: "Phần mềm vận hành cho chủ chỗ nghỉ độc lập.",
    productTitle: "Sản phẩm",
    companyTitle: "Công ty",
    legalTitle: "Pháp lý",
    company: ["Về TLSHost", "Liên hệ", "Tuyển dụng"],
    legal: ["Điều khoản sử dụng", "Chính sách bảo mật"],
    rights: "Bảo lưu mọi quyền.",
  },

  featuresPage: {
    hero: {
      eyebrow: "Nền tảng",
      title: "Một không gian làm việc. Không chắp vá.",
      body: "TLSHost thay bảng tính, các trang đăng nhập kênh và những nhóm chat rời rạc bằng một nơi duy nhất vận hành chỗ nghỉ của bạn — từ lúc khách hỏi tới lúc phòng được dọn xong.",
    },
    value: {
      eyebrow: "Vì sao chủ nhà chuyển sang",
      title: "Bốn cách TLSHost trả lại tiền cho bạn",
      body: "Mọi tính năng ở đây đều quy về một trong bốn thứ: độ phủ, quyền kiểm soát, thời gian tiết kiệm, hoặc doanh thu bạn giữ lại.",
      items: [
        {
          title: "Độ phủ & phân phối",
          body: "Xuất hiện ở mọi kênh khách của bạn đang tìm, đồng thời nhận đặt phòng thẳng trên trang của riêng bạn.",
        },
        {
          title: "Kiểm soát & minh bạch",
          body: "Một chiếc lịch, phân quyền theo phạm vi và nhật ký người tạo. Nhìn được tất cả, không có bất ngờ.",
        },
        {
          title: "Thời gian & quy mô",
          body: "Trợ lý soạn sẵn, đồng bộ tự chạy. Danh mục lớn lên mà khối lượng việc tay không lớn theo.",
        },
        {
          title: "Doanh thu giữ lại",
          body: "0% hoa hồng trên mọi lượt đặt trực tiếp. Mỗi đêm bán được trả về cho bạn nguyên vẹn.",
        },
      ],
    },
    extras: [
      {
        title: "Thiết lập có hướng dẫn",
        body: "Phòng, giá, tiện nghi và chính sách gói trong một luồng từng bước, hoàn tất trong một buổi.",
      },
      {
        title: "Số liệu trong một cái liếc",
        body: "Doanh thu, công suất và lượt nhận phòng sắp tới nằm gọn trên một trang tổng quan.",
      },
      {
        title: "Song ngữ từ gốc",
        body: "Tiếng Việt và tiếng Anh, chuyển đổi theo từng tổ chức chứ không phải bản dịch chắp vá.",
      },
    ],
    cta: {
      title: "Vận hành tất cả, không mất hoa hồng.",
      body: "Thiết lập chỗ nghỉ và nhận lượt đặt trực tiếp đầu tiên ngay hôm nay.",
    },
  },

  /* The calendar's own page. "Learn about the operations calendar" on the
     features page used to land on pricing; this is what it promises. */
  calendarPage: {
    meta: {
      title: "Lịch & vận hành",
      description:
        "Một bảng lịch nhiều ngày cho cả danh mục: đặt phòng, đêm khóa, tình trạng buồng phòng và công suất — sửa được ngay trên bảng.",
    },
    back: "Tất cả tính năng",

    hero: {
      eyebrow: "Lịch & vận hành",
      title: "Một bảng, thấy hết.",
      body: "Đặt phòng, đêm khóa, phòng còn trống và tình trạng dọn dẹp của mọi chỗ nghỉ trên cùng một bảng nhiều ngày. Đây là bản gốc — mọi con số khác trong TLSHost đều đọc ra từ đây.",
    },

    overview: {
      eyebrow: "Một góc nhìn",
      title: "Mọi chỗ nghỉ nằm cạnh nhau",
      body: "Tuần trước, hôm nay và ba tháng tới của tất cả chỗ nghỉ trong một khung hình. Không đăng nhập lần lượt sáu kênh, không bảng tính đối chiếu.",
      bullets: [
        "Nhiều chỗ nghỉ, nhiều loại phòng trên cùng một bảng",
        "Đặt phòng và đêm khóa hiện cạnh nhau, cùng một thang ngày",
        "Nhảy tới bất kỳ ngày hay chỗ nghỉ nào trong một thao tác",
        "Công suất tính lại ngay lúc bảng đổi",
      ],
    },

    control: {
      eyebrow: "Trong tầm tay",
      title: "Sửa ngay trên bảng",
      body: "Kéo chọn vài ngày là xong một đặt phòng. Dời kỳ lưu trú, khóa một đêm để bảo trì, đổi phòng cho khách — làm tại chỗ, không mở thêm màn hình nào.",
      bullets: [
        "Kéo chọn ngày để tạo đặt phòng mới",
        "Dời hoặc kéo dài kỳ lưu trú ngay trên thanh của nó",
        "Khóa đêm cho bảo trì hoặc cho chủ nhà ở",
        "Doanh thu và lượt nhận phòng đổi theo cùng lúc",
      ],
    },

    journey: {
      eyebrow: "Suốt kỳ lưu trú",
      title: "Từ lúc đặt tới lúc phòng sạch trở lại",
      body: "Bảng lịch đi hết vòng đời một lượt khách, nên không chặng nào phải nằm trong trí nhớ của bạn.",
      steps: [
        {
          title: "Đặt",
          body: "Đặt phòng mới — trực tiếp hay đồng bộ về từ OTA — hiện lên bảng và trừ phòng trống ngay khi tới.",
        },
        {
          title: "Ở",
          body: "Ai đang ở, ai đến chiều nay, ai trả phòng sáng mai — đọc trên một hàng, không cần lọc.",
        },
        {
          title: "Dọn",
          body: "Trạng thái dọn nằm ngay trên ô của phòng, nên vị khách kế tiếp không bao giờ là một bất ngờ.",
        },
      ],
      always: {
        label: "Xuyên suốt",
        title: "Trợ lý AI",
        body: "Nhờ trợ lý soạn một thay đổi: dời phòng, chèn thêm đặt phòng, khóa một đêm. Nó đề xuất, bạn duyệt ngay trên bảng. Không có gì tự chạy.",
      },
    },

    stats: [
      { value: "1", caption: "Bảng", label: "Cho toàn bộ chỗ nghỉ và loại phòng bạn đang vận hành" },
      { value: "24/7", caption: "Trợ lý", label: "Luôn sẵn sàng soạn thay đổi chờ bạn duyệt" },
      { value: "0%", caption: "Hoa hồng", label: "Trên mọi lượt đặt trực tiếp, vĩnh viễn" },
    ],

    faq: {
      title: "Hỏi về lịch",
      items: [
        {
          q: "Lịch có gom đủ mọi kênh không?",
          a: "Có. Đặt phòng trực tiếp và đặt phòng đồng bộ về từ các OTA nằm chung một bảng, nên một đêm không thể bị bán hai lần.",
        },
        {
          q: "Tôi có nhiều chỗ nghỉ thì sao?",
          a: "Bảng được dựng cho nhiều chỗ nghỉ, nhiều loại phòng ngay từ đầu. Bạn quét hết danh mục mà không rời trang.",
        },
        {
          q: "Buồng phòng và số liệu nằm ở đâu?",
          a: "Trạng thái dọn nằm trên từng ô phòng. Doanh thu, công suất và lượt nhận phòng sắp tới tự dồn về trang tổng quan.",
        },
      ],
    },

    cta: {
      title: "Đưa cả danh mục lên một bảng.",
      body: "Dựng chỗ nghỉ đầu tiên và nhận lượt đặt trực tiếp ngay hôm nay.",
    },
  },

  aiPage: {
    meta: {
      title: "Trợ lý AI vận hành",
      description:
        "Một trợ lý hội thoại ngay trong không gian làm việc: nó soạn sẵn thay đổi về đặt phòng, giá và thanh toán, rồi chờ bạn duyệt.",
    },
    back: "Tất cả tính năng",

    hero: {
      eyebrow: "Trợ lý AI vận hành",
      title: "Nó soạn. Bạn duyệt.",
      body: "Nhờ bằng tiếng Việt đời thường, như nhờ một đồng nghiệp. Trợ lý dựng sẵn thay đổi, trình bày chính xác thứ sẽ đổi, rồi dừng lại chờ. Quyền quyết định không đi đâu cả.",
    },

    overview: {
      eyebrow: "Ngôn ngữ đời thường",
      title: "Không cú pháp, không menu phải lùng",
      body: "Tạo một đặt phòng, đổi giá cuối tuần, khóa phòng bảo trì, ghi nhận một khoản khách vừa chuyển. Cứ mô tả bằng lời của bạn — trợ lý hiểu ý định và dựng đúng thao tác.",
      bullets: [
        "Nhờ bằng câu nói thường ngày, không phải học lệnh",
        "Soạn được đặt phòng, chỗ nghỉ, phòng, giá và thanh toán",
        "Trả lời theo lối hội thoại, hiện dần từng câu",
        "Nằm ngay trong không gian làm việc, không phải tab riêng",
      ],
    },

    control: {
      eyebrow: "Bạn đặt luật",
      title: "Không dòng dữ liệu nào được ghi trước cái gật đầu của bạn",
      body: "Mỗi đề xuất là một bản nháp kèm phần xem trước đầy đủ. Duyệt thì nó có hiệu lực; từ chối thì không có gì xảy ra. Bạn nhân đôi sức làm mà không giao đi quyền kiểm soát.",
      bullets: [
        "Bản xem trước đầy đủ trước khi bất cứ gì được ghi",
        "Nháp có hạn dùng, hết hạn thì phải soạn lại",
        "Khi duyệt, hệ thống kiểm tra lại từ đầu trên dữ liệu mới nhất",
        "Hoàn tiền và huỷ đặt phòng luôn phải chờ bạn, không có ngoại lệ",
      ],
    },

    journey: {
      eyebrow: "Vòng đời một đề xuất",
      title: "Ba bước, và quyền quyết định vẫn ở chỗ cũ",
      body: "Trợ lý gánh phần soạn thảo. Phần quyết định thì không bao giờ rời khỏi tay bạn.",
      steps: [
        {
          title: "Bạn nhờ",
          body: "Nói điều cần làm bằng lời của bạn. Trợ lý đọc lịch và giá hiện tại trước khi đề xuất bất cứ điều gì.",
        },
        {
          title: "Nó soạn",
          body: "Một bản nháp hiện ra kèm đúng những dòng sẽ thay đổi — không phải câu văn mô tả, mà chính phần chênh lệch.",
        },
        {
          title: "Bạn duyệt",
          body: "Một cú bấm là áp dụng. Từ chối thì không có gì xảy ra, và nhật ký ghi lại cả người đề xuất lẫn người duyệt.",
        },
      ],
      always: {
        label: "Tuỳ bạn chỉnh",
        title: "Hạn mức tự duyệt",
        body: "Đặt một ngưỡng để việc nhỏ chạy thẳng và chỉ báo lại: khóa một đêm, sửa một ghi chú. Vượt ngưỡng thì nó dừng chờ. Ngưỡng do bạn đặt, và bạn đổi được bất cứ lúc nào.",
      },
    },

    stats: [
      { value: "0", caption: "Ngoại lệ", label: "Số thay đổi được ghi mà không qua tay bạn" },
      { value: "24/7", caption: "Không hết ca", label: "Trợ lý luôn sẵn sàng soạn phần việc lặp lại" },
      { value: "100%", caption: "Minh bạch", label: "Đề xuất nào cũng kèm phần chênh lệch đầy đủ" },
    ],

    faq: {
      title: "Hỏi về trợ lý",
      items: [
        {
          q: "Trợ lý có tự ý thay đổi gì không?",
          a: "Không, và đây là ràng buộc kỹ thuật chứ không phải lời hứa. Trợ lý không có công cụ nào ghi thẳng vào dữ liệu — nó chỉ tạo được bản nháp. Việc áp dụng là một thao tác riêng, do bạn thực hiện.",
        },
        {
          q: "Tôi có phải học lệnh gì không?",
          a: "Không. Gõ như khi bạn giải thích cho một người mới vào làm. Nếu câu nhờ còn thiếu thông tin, trợ lý hỏi lại thay vì đoán.",
        },
        {
          q: "Nếu lịch thay đổi sau khi nó soạn nháp thì sao?",
          a: "Lúc bạn bấm duyệt, hệ thống kiểm tra lại trên dữ liệu mới nhất. Nếu trong lúc đó một kênh OTA đã bán mất chính đêm ấy, đề xuất bị từ chối kèm lý do thay vì âm thầm ghi đè.",
        },
      ],
    },

    cta: {
      title: "Giao đi phần việc lặp lại.",
      body: "Giữ nguyên quyền quyết định. Bắt đầu miễn phí hôm nay.",
    },
  },

  channelsPage: {
    meta: {
      title: "Đồng bộ kênh OTA",
      description:
        "iCal hai chiều với Airbnb, Booking.com, Agoda, Traveloka và mọi OTA hỗ trợ iCal. Tự làm mới mỗi giờ, có chốt chặn chống mất lịch khóa.",
    },
    back: "Tất cả tính năng",

    hero: {
      eyebrow: "Đồng bộ kênh",
      title: "Bán khắp nơi. Không đụng nhau.",
      body: "Kết nối iCal hai chiều với mọi OTA lớn. Một đêm bán ở bất kỳ đâu sẽ tự khóa ở tất cả những nơi còn lại, và bạn không phải mở kênh nào ra đối soát.",
    },

    overview: {
      eyebrow: "Độ phủ",
      title: "Một lần kết nối, mọi kênh cùng biết",
      body: "Dán link iCal của từng kênh vào một lần. Từ đó tình trạng phòng chảy cả hai hướng — đặt phòng OTA về với bạn, lịch khóa của bạn ra với họ.",
      bullets: [
        "Nhập và xuất iCal, cả hai chiều",
        "Airbnb, Booking.com, Agoda, Traveloka và mọi OTA có iCal",
        "Thêm một kênh mới mất chưa tới hai phút",
        "Mỗi loại phòng có link xuất riêng, ổn định theo thời gian",
      ],
    },

    control: {
      eyebrow: "Không trùng phòng",
      title: "Bán một đêm, khóa ở mọi nơi",
      body: "Đặt phòng trực tiếp và đặt phòng từ OTA nằm chung một lịch, nên chúng không thể rơi vào cùng một đêm. Nếu hai kênh cùng nhắm một đêm, hệ thống chặn ở tầng cơ sở dữ liệu và báo cho bạn.",
      bullets: [
        "Tự làm mới mỗi giờ, không cần bấm tay",
        "Trùng phòng bị chặn ở tầng dữ liệu, không phải ở tầng giao diện",
        "Xung đột được báo kèm đúng hai bên tranh chấp",
        "Mọi lượt đồng bộ đều lưu lại: thấy gì, áp dụng gì, giữ lại gì",
      ],
    },

    journey: {
      eyebrow: "Một lượt đồng bộ",
      title: "Điều gì xảy ra mỗi giờ",
      body: "Phần thêm áp dụng ngay. Phần xoá thì không — vì hai chiều đó không nguy hiểm như nhau.",
      steps: [
        {
          title: "Tải",
          body: "Lấy feed của từng kênh. Mạng lỗi hay kênh trả về trang báo lỗi thì lượt này dừng, và lịch khóa hiện có không bị đụng tới.",
        },
        {
          title: "Đối chiếu",
          body: "Mỗi sự kiện được khớp theo mã định danh riêng. Đêm mới thành lịch khóa mới; kỳ lưu trú đổi ngày thì cập nhật tại chỗ.",
        },
        {
          title: "Ghi nhận",
          body: "Lượt chạy được lưu lại kèm số sự kiện thấy, số áp dụng và số giữ lại chờ xem — để câu hỏi 'vì sao mất lịch khóa' luôn có câu trả lời.",
        },
      ],
      always: {
        label: "Chốt chặn",
        title: "Xoá là chiều nguy hiểm",
        body: "Thêm nhầm một lịch khóa chỉ làm bạn mất một lượt đặt. Xoá nhầm thì bạn bán một căn phòng đã có khách. Nên feed đột nhiên rỗng, hoặc một lượt làm biến mất quá nhiều lịch khóa, đều bị giữ lại chờ bạn xem thay vì thi hành ngay.",
      },
    },

    stats: [
      { value: "60′", caption: "Chu kỳ", label: "Mỗi kênh đã kết nối được làm mới mỗi giờ" },
      { value: "2", caption: "Chiều", label: "Đặt phòng vào, lịch khóa ra — cùng một kết nối" },
      { value: "0", caption: "Mục tiêu", label: "Số đêm bị bán hai lần trên các kênh đã kết nối" },
    ],

    faq: {
      title: "Hỏi về đồng bộ kênh",
      items: [
        {
          q: "Tôi kết nối được những kênh nào?",
          a: "Bất kỳ OTA nào hỗ trợ iCal, trong đó có Airbnb, Booking.com, Agoda, Traveloka, Expedia và VRBO. Không cần chờ xét duyệt đối tác.",
        },
        {
          q: "Đồng bộ có đẩy được giá sang OTA không?",
          a: "Không. iCal chỉ mang thông tin ngày bận hay trống — không mang giá, không mang tên khách. Đẩy giá cần API đối tác của từng hãng, mỗi hãng một quy trình xét duyệt riêng, và việc đó nằm ngoài phạm vi hiện tại.",
        },
        {
          q: "Nếu một kênh gặp sự cố thì sao?",
          a: "Lượt đồng bộ đó dừng và giãn dần thời gian thử lại, không đụng vào lịch khóa đang có. Hỏng năm lượt liên tiếp thì bạn nhận email — một kênh hỏng âm thầm còn tệ hơn một kênh báo lỗi.",
        },
      ],
    },

    cta: {
      title: "Bật đồng bộ rồi quên nó đi.",
      body: "Kết nối các kênh và thôi phải đối soát bằng tay.",
    },
  },

  directPage: {
    meta: {
      title: "Trang đặt phòng trực tiếp",
      description:
        "Mỗi chỗ nghỉ có một trang đặt phòng mang thương hiệu của bạn trên link riêng. Khách đặt thẳng, xác nhận tức thì, không mất hoa hồng.",
    },
    back: "Tất cả tính năng",

    hero: {
      eyebrow: "Đặt phòng trực tiếp",
      title: "Cửa hàng của bạn. Doanh thu của bạn.",
      body: "Một trang đặt phòng trên đường link của riêng bạn, cho từng chỗ nghỉ. Khách chọn ngày, đặt và được xác nhận ngay. Lượt đặt đổ thẳng vào cùng chiếc lịch với đặt phòng OTA — và không ai xén phần trăm nào.",
    },

    overview: {
      eyebrow: "Cửa hàng của bạn",
      title: "Một đường link bạn chia sẻ được ở bất cứ đâu",
      body: "Dán vào bio, gửi trong tin nhắn, gắn vào quảng cáo, in lên tấm thiệp trong phòng. Khách thấy phòng trống thật và đặt được ngay, không có OTA đứng giữa.",
      bullets: [
        "Trang mang tên và hình ảnh của chỗ nghỉ bạn",
        "Link công khai riêng cho từng chỗ nghỉ",
        "Phòng trống lấy trực tiếp từ lịch, không phải bản sao",
        "Xác nhận gửi cho khách ngay khi đặt xong",
      ],
    },

    control: {
      eyebrow: "Doanh thu giữ lại",
      title: "Cắt hoa hồng, và giữ luôn mối quan hệ",
      body: "Một lượt đặt trực tiếp là mối quan hệ bạn sở hữu từ cú bấm đầu tiên tới lúc khách trả phòng. Email của khách là của bạn, nên lần sau họ quay lại thẳng chỗ bạn.",
      bullets: [
        "0% hoa hồng trên mỗi lượt đặt, ở mọi gói",
        "Thuê bao cố định, không phí ẩn theo lượt",
        "Thông tin khách thuộc về bạn, không thuộc về kênh",
        "Đặt phòng trực tiếp và OTA dùng chung một lịch",
      ],
    },

    journey: {
      eyebrow: "Từ link tới lượt đặt",
      title: "Ba bước, không ai đứng giữa",
      body: "Khách không phải tạo tài khoản, không phải tải ứng dụng, và không đi qua kênh nào khác.",
      steps: [
        {
          title: "Khách mở link",
          body: "Trang hiện phòng trống thật theo lịch của bạn, cùng giá đúng cho khoảng ngày họ chọn.",
        },
        {
          title: "Khách đặt",
          body: "Chọn ngày, điền thông tin, xác nhận. Không tài khoản, không bước thừa nào giữa ý định và lượt đặt.",
        },
        {
          title: "Vào lịch",
          body: "Lượt đặt hiện trên bảng ngay lập tức và khóa đêm đó ở mọi kênh đã kết nối, ngay lần đồng bộ kế tiếp.",
        },
      ],
      always: {
        label: "Nói cho rõ",
        title: "Trực tiếp không thay thế OTA",
        body: "OTA vẫn là nơi khách mới tìm thấy bạn, và điều đó đáng tiền hoa hồng. Trang trực tiếp dành cho nhóm khác: khách quay lại, khách được giới thiệu, khách thấy bạn trên mạng xã hội. Với nhóm đó thì trả hoa hồng là mất tiền oan.",
      },
    },

    stats: [
      { value: "0%", caption: "Vĩnh viễn", label: "Hoa hồng trên đặt phòng trực tiếp, ở mọi gói" },
      { value: "1", caption: "Lịch chung", label: "Cho cả đặt phòng trực tiếp lẫn đặt phòng OTA" },
      { value: "100%", caption: "Của bạn", label: "Doanh thu và thông tin khách từ lượt đặt trực tiếp" },
    ],

    faq: {
      title: "Hỏi về đặt phòng trực tiếp",
      items: [
        {
          q: "Đã bán trên Airbnb rồi, tôi cần trang riêng làm gì?",
          a: "OTA mang khách mới tới, nhưng họ giữ phần trăm và giữ luôn quan hệ với khách. Trang riêng là nơi bạn nhận những lượt đặt vốn đã thuộc về mình: khách cũ quay lại, khách được bạn bè giới thiệu, khách theo dõi bạn trên mạng xã hội.",
        },
        {
          q: "Lượt đặt trực tiếp đi về đâu?",
          a: "Thẳng vào cùng chiếc lịch với đặt phòng OTA. Đêm đó bị khóa trên mọi kênh đã kết nối, nên không có chuyện bán trùng.",
        },
        {
          q: "Khách trả tiền như thế nào?",
          a: "Ở phiên bản hiện tại, trang thu thông tin đặt phòng và gửi hướng dẫn thanh toán trong email xác nhận; bạn ghi nhận khoản tiền khi nhận được. Cổng thanh toán trực tuyến nằm trong kế hoạch, chưa có ở bản này.",
        },
      ],
    },

    cta: {
      title: "Giữ trọn lượt đặt kế tiếp.",
      body: "Mở trang đặt phòng của bạn và thôi trả hoa hồng cho khách vốn đã là của mình.",
    },
  },

  housekeepingPage: {
    meta: {
      title: "Buồng phòng",
      description:
        "Mỗi lượt trả phòng tự thành một việc cần dọn. Nhân viên xem trên điện thoại, chạm một lần báo sạch, chủ nhà theo dõi tiến độ ngay trên lịch.",
    },
    back: "Tất cả tính năng",

    hero: {
      eyebrow: "Buồng phòng",
      title: "Khách đi, phòng vào việc.",
      body: "Không nhóm chat, không danh sách giấy, không ai phải nhớ. Lượt trả phòng tự sinh ra việc cần dọn, việc tự tới đúng người, và bảng lịch cập nhật ngay khi phòng xong.",
    },

    overview: {
      eyebrow: "Cho đội dọn phòng",
      title: "Mở điện thoại là thấy việc của mình",
      body: "Nhân viên đăng nhập và thấy đúng những phòng được giao — phòng nào khách vừa đi, phòng nào chuyển khách trong ngày, phòng nào khách còn ở tiếp.",
      bullets: [
        "Phòng tự chuyển sang cần dọn ngay khi khách trả phòng",
        "Có ngữ cảnh: trả phòng, chuyển khách hay khách ở tiếp",
        "Một chạm báo sạch, cả đội thấy tức thì",
        "Chỉ thấy phòng được giao, không thấy giá hay thông tin thanh toán",
      ],
    },

    control: {
      eyebrow: "Cho chủ nhà và quản lý",
      title: "Tiến độ dọn phòng, không phải hỏi ai",
      body: "Một bảng kiểm tra dựng theo ngày hôm nay: phòng nào xong, phòng nào đang làm, phòng nào cần chú ý — đặt cạnh danh sách khách đến và đi trong ngày.",
      bullets: [
        "Bảng kiểm tra gom toàn bộ phòng trong ngày",
        "Trạng thái: sạch, cần dọn, đã kiểm tra, đang bảo trì",
        "Trạng thái hiện luôn trên ô phòng ở bảng lịch",
        "Gắn cờ bảo trì để phòng không bị bán ra",
      ],
    },

    journey: {
      eyebrow: "Từ trả phòng tới nhận phòng",
      title: "Một vòng dọn phòng, không đứt đoạn",
      body: "Mỗi phòng đi hết chu trình mà không ai phải theo dõi bằng trí nhớ.",
      steps: [
        {
          title: "Trả phòng",
          body: "Khách rời đi, phòng tự chuyển sang cần dọn và xuất hiện trong danh sách của người phụ trách.",
        },
        {
          title: "Dọn",
          body: "Nhân viên làm xong, chạm một lần báo sạch. Bảng lịch và bảng kiểm tra đổi theo ngay lúc đó.",
        },
        {
          title: "Kiểm tra",
          body: "Quản lý xác nhận, phòng chuyển sang sẵn sàng. Lượt khách kế tiếp không bao giờ là một canh bạc.",
        },
      ],
      always: {
        label: "Trên điện thoại",
        title: "Không phải cài ứng dụng",
        body: "Giao diện dọn phòng chạy trên trình duyệt điện thoại và thêm ra màn hình chính được như một ứng dụng. Không kho ứng dụng, không bản cập nhật, không thiết bị nào bị bỏ lại vì máy quá cũ.",
      },
    },

    stats: [
      { value: "1", caption: "Thao tác", label: "Số lần chạm để báo một phòng đã sạch" },
      { value: "0", caption: "Đã bỏ", label: "Danh sách giấy và nhóm chat cần duy trì" },
      { value: "100%", caption: "Tự động", label: "Lượt trả phòng tự sinh ra việc cần dọn" },
    ],

    faq: {
      title: "Hỏi về buồng phòng",
      items: [
        {
          q: "Nhân viên có phải cài ứng dụng không?",
          a: "Không. Giao diện chạy trên trình duyệt điện thoại và thêm ra màn hình chính được. Máy Android cũ hay iPhone đời đầu đều dùng được.",
        },
        {
          q: "Nhân viên dọn phòng nhìn thấy những gì?",
          a: "Chỉ những chỗ nghỉ và phòng bạn giao, kèm việc cần làm hôm nay. Họ không thấy giá phòng, doanh thu hay thông tin thanh toán của khách.",
        },
        {
          q: "Nhiều người dùng chung một điện thoại thì sao?",
          a: "Đó là tình huống phổ biến nhất trên thực tế. Thiết bị đăng nhập một lần theo chỗ nghỉ, mỗi người có mã riêng để hệ thống vẫn ghi được ai đã làm việc gì.",
        },
      ],
    },

    cta: {
      title: "Cho đội dọn phòng một danh sách đúng.",
      body: "Thiết lập trong vài phút. Có sẵn ở mọi gói.",
    },
  },

  teamPage: {
    meta: {
      title: "Đội ngũ & phân quyền",
      description:
        "Giao cho mỗi cộng tác viên đúng chỗ nghỉ họ phụ trách, quyết định ai được sửa đặt phòng của ai, và biết ai đã tạo từng bản ghi.",
    },
    back: "Tất cả tính năng",

    hero: {
      eyebrow: "Đội ngũ & phân quyền",
      title: "Giao việc, đừng giao mật khẩu.",
      body: "Mỗi người một tài khoản, mỗi tài khoản một phạm vi. Cộng tác viên thấy đúng phần việc được giao, và mọi bản ghi đều mang tên người tạo ra nó.",
    },

    overview: {
      eyebrow: "Phạm vi",
      title: "Ai cũng chỉ thấy phần của mình",
      body: "Mời một người và giao cho họ đúng những chỗ nghỉ, những loại phòng họ phụ trách — không hơn. Người quản An Bàng không cần nhìn thấy Hội An.",
      bullets: [
        "Phân quyền tới từng chỗ nghỉ và từng loại phòng",
        "Cổng riêng cho cộng tác viên, chỉ hiện phạm vi được giao",
        "Mời qua email, người được mời tự đặt mật khẩu",
        "Giao diện rút gọn theo vai trò, không bày thứ họ không dùng",
      ],
    },

    control: {
      eyebrow: "Trách nhiệm",
      title: "Biết ai đã làm gì, và lúc nào",
      body: "Bạn quyết định ai được sửa đặt phòng của ai. Mọi thay đổi đều để lại dấu vết, nên khi có gì đó không khớp, câu hỏi 'ai làm' luôn có câu trả lời.",
      bullets: [
        "Bật hoặc tắt quyền sửa đặt phòng của người khác",
        "Mỗi đặt phòng ghi rõ người tạo",
        "Nhật ký lưu người thực hiện, thao tác và thời điểm",
        "Đề xuất của trợ lý AI ghi cả người duyệt",
      ],
    },

    journey: {
      eyebrow: "Thêm một người",
      title: "Ba bước là xong",
      body: "Từ lúc quyết định giao việc tới lúc người đó bắt đầu làm, không có bước nào cần tới bạn nữa.",
      steps: [
        {
          title: "Mời",
          body: "Nhập email và chọn vai trò. Lời mời gửi đi, người nhận tự đặt mật khẩu của họ.",
        },
        {
          title: "Giao phạm vi",
          body: "Tích những chỗ nghỉ và loại phòng họ phụ trách. Phạm vi có hiệu lực ngay, không cần họ đăng nhập lại.",
        },
        {
          title: "Theo dõi",
          body: "Từ đó mọi thao tác của họ đều hiện trong nhật ký, gắn với tên và thời điểm.",
        },
      ],
      always: {
        label: "Lớn dần",
        title: "Bắt đầu một mình cũng không sao",
        body: "Phần lớn chủ nhà bắt đầu với một tài khoản duy nhất và không cần đụng tới mục này. Nó nằm sẵn đó cho ngày bạn thuê người đầu tiên — không phải đổi công cụ, không phải chuyển dữ liệu.",
      },
    },

    stats: [
      { value: "1:1", caption: "Từng người", label: "Phạm vi riêng cho mỗi chỗ nghỉ và loại phòng" },
      { value: "100%", caption: "Truy vết", label: "Bản ghi nào cũng mang tên người tạo" },
      { value: "0", caption: "Dùng chung", label: "Số mật khẩu phải chia sẻ giữa các thành viên" },
    ],

    faq: {
      title: "Hỏi về đội ngũ & phân quyền",
      items: [
        {
          q: "Tôi giới hạn được những gì cộng tác viên nhìn thấy?",
          a: "Được, tới từng chỗ nghỉ và từng loại phòng. Họ đăng nhập vào một cổng riêng chỉ hiện phạm vi được giao, tách khỏi không gian làm việc của bạn.",
        },
        {
          q: "Cộng tác viên có sửa được đặt phòng của nhau không?",
          a: "Chỉ khi bạn cho phép. Đây là một công tắc riêng cho từng người, mặc định tắt. Dù bật hay tắt, mỗi đặt phòng vẫn ghi lại người tạo ra nó.",
        },
        {
          q: "Số thành viên có bị giới hạn không?",
          a: "Thành viên và phân quyền nằm ở gói Chuyên nghiệp, không giới hạn số người. Gói thấp hơn dùng một tài khoản chủ nhà.",
        },
      ],
    },

    cta: {
      title: "Đưa cả đội lên cùng một hệ thống.",
      body: "Phân quyền từng người, truy vết từng bản ghi. Bắt đầu miễn phí.",
    },
  },

  pricingPage: {
    eyebrow: "Bảng giá",
    title: "Mức giá tự trả lại tiền cho nó",
    body: "Một khoản thuê bao cố định. Không phí trên mỗi lượt đặt, không phụ phí ẩn. Bắt đầu miễn phí và chỉ nâng cấp khi bạn thực sự cần.",
    perMonth: "/ mỗi tháng",
    forever: "/ vĩnh viễn",
    popular: "Phổ biến nhất",
    note: "Giá niêm yết bằng VND, đã gồm mọi cập nhật. Không gói nào thu hoa hồng.",
    plans: [
      {
        name: "Khởi đầu",
        tagline: "Chỗ nghỉ đầu tiên của bạn, lên mạng ngay tối nay.",
        price: "₫0",
        cadence: "forever",
        cta: "Bắt đầu miễn phí",
        popular: false,
        features: [
          "Một chỗ nghỉ",
          "Lịch đặt phòng và kho phòng",
          "Trang đặt phòng trực tiếp của bạn",
          "0% hoa hồng trên mọi lượt đặt",
        ],
      },
      {
        name: "Kênh bán",
        tagline: "Cho chủ nhà đang bán trên nhiều OTA cùng lúc.",
        price: "₫290k",
        cadence: "month",
        cta: "Dùng thử 14 ngày",
        popular: true,
        features: [
          "Toàn bộ gói Khởi đầu",
          "Đồng bộ iCal hai chiều",
          "Airbnb, Booking.com, Agoda, Traveloka và hơn nữa",
          "Tự làm mới tình trạng phòng mỗi giờ",
          "Không giới hạn số chỗ nghỉ",
        ],
      },
      {
        name: "Chuyên nghiệp",
        tagline: "Cho đội ngũ vận hành danh mục ở quy mô lớn.",
        price: "₫690k",
        cadence: "month",
        cta: "Trao đổi với chúng tôi",
        popular: false,
        features: [
          "Toàn bộ gói Kênh bán",
          "Trợ lý AI vận hành",
          "Thành viên và phân quyền theo phạm vi",
          "Nhật ký người tạo đặt phòng",
          "Buồng phòng và trang số liệu tổng quan",
        ],
      },
    ],
    included: {
      eyebrow: "Ở mọi gói",
      title: "Gói nào cũng bắt đầu từ những thứ thiết yếu",
      items: [
        {
          title: "Đặt phòng trực tiếp",
          body: "Trang đặt phòng riêng với 0% hoa hồng — có sẵn từ gói miễn phí, và ở mọi gói phía trên.",
        },
        {
          title: "Một chiếc lịch",
          body: "Bảng đa chỗ nghỉ gom đặt phòng, lịch khóa và tình trạng dọn dẹp vào cùng một góc nhìn.",
        },
        {
          title: "Lớn lên khi sẵn sàng",
          body: "Thêm đồng bộ kênh, rồi trợ lý AI và phân quyền đội ngũ — không phải chuyển sang công cụ khác.",
        },
      ],
    },
    faq: {
      title: "Trước khi bạn hỏi",
      items: [
        {
          q: "Các bạn có thu phần trăm trên đặt phòng không?",
          a: "Không bao giờ. TLSHost chỉ thu thuê bao cố định. Bạn giữ 100% mỗi lượt đặt trực tiếp, ở tất cả các gói kể cả gói miễn phí.",
        },
        {
          q: "Tôi dùng thử trước khi trả tiền được không?",
          a: "Được. Gói Khởi đầu miễn phí vĩnh viễn và không cần thẻ tín dụng. Gói Kênh bán có 14 ngày dùng thử đầy đủ tính năng.",
        },
        {
          q: "Tôi đổi gói giữa chừng được không?",
          a: "Bất cứ lúc nào. Nâng hoặc hạ gói theo mùa và theo đà danh mục của bạn. Phần chênh lệch được tính theo tỷ lệ ngày sử dụng.",
        },
        {
          q: "Thanh toán bằng cách nào?",
          a: "Chuyển khoản ngân hàng nội địa, thẻ tín dụng và ví điện tử phổ biến tại Việt Nam. Hóa đơn VAT xuất theo yêu cầu.",
        },
      ],
    },
    cta: {
      title: "Bắt đầu miễn phí, trong vài phút.",
      body: "Không cần thẻ tín dụng. Chỉ nâng cấp khi bạn thấy cần.",
      primary: "Tạo tài khoản",
    },
  },

  waitlist: {
    eyebrow: "Đăng ký sớm",
    title: "Giữ chỗ cho ngày TLSHost mở cửa",
    body: "Chúng tôi đang hoàn thiện những phần cuối cùng. Để lại email và bạn sẽ nằm trong nhóm đầu tiên được mời vào, kèm gói Khởi đầu miễn phí vĩnh viễn.",
    nameLabel: "Tên của bạn",
    namePlaceholder: "Nguyễn Văn A",
    emailLabel: "Email",
    emailPlaceholder: "ban@vidu.com",
    sizeLabel: "Bạn đang quản lý bao nhiêu chỗ nghỉ?",
    sizeHint: "Không bắt buộc. Giúp chúng tôi biết nên mời ai trước.",
    sizeOptions: [
      "Chưa có, đang tìm hiểu",
      "1 chỗ nghỉ",
      "2–5 chỗ nghỉ",
      "6–20 chỗ nghỉ",
      "Trên 20 chỗ nghỉ",
    ],
    submit: "Đăng ký nhận thông báo",
    submitting: "Đang gửi…",
    consent:
      "Chúng tôi chỉ dùng email này để báo bạn khi TLSHost mở cửa. Không quảng cáo, không chia sẻ cho bên thứ ba, và bạn có thể yêu cầu xoá bất cứ lúc nào.",
    successTitle: "Đã ghi nhận",
    successBody:
      "Cảm ơn bạn. Chúng tôi sẽ gửi lời mời tới địa chỉ bạn vừa để lại ngay khi có chỗ.",
    backHome: "Về trang chủ",
    errorSummary: "Chưa gửi được. Vui lòng xem lại:",
    errors: {
      nameRequired: "Vui lòng cho biết tên của bạn.",
      emailRequired: "Vui lòng nhập email.",
      emailInvalid: "Email này trông chưa đúng, bạn kiểm tra lại giúp nhé.",
      rateLimited: "Bạn vừa gửi xong. Chờ một chút rồi thử lại.",
      server: "Có lỗi ở phía chúng tôi. Bạn thử lại sau ít phút giúp nhé.",
    },
  },

  /** Labels rendered inside the product mockups. */
  mock: {
    calendar: {
      title: "Lịch",
      subtitle: "3 chỗ nghỉ · Tháng 7",
      occupancy: "Lấp đầy",
      newBooking: "Đặt phòng mới",
      blocked: "Đã chặn trên Booking.com · Agoda",
      direct: "Trực tiếp",
      zeroFee: "0% hoa hồng",
      days: ["T2", "T3", "T4", "T5", "T6", "T7", "CN"],
      properties: ["Ocean View Studio", "Garden Suite", "Sky Loft", "Bamboo Room"],
    },
    /* The month grid on the calendar page: one property, a stay being drawn
       across dates, and the draft it produces. */
    calendarMonth: {
      title: "Lịch",
      subtitle: "Ocean View Studio · Tháng 7",
      days: ["T2", "T3", "T4", "T5", "T6", "T7", "CN"],
      hint: "Kéo chọn ngày để tạo đặt phòng",
      draft: "Đặt phòng mới",
      guest: "Khách",
      guestName: "Sofia Kapoor",
      initials: "SK",
      partySize: "2 khách",
      nights: "3 đêm",
      dates: "15–18/7",
      total: "Tổng cộng",
      confirm: "Tạo đặt phòng",
      others: ["Linh Tran", "Hoang Vu"],
    },
    ai: {
      title: "Trợ lý AI",
      status: "Trực tuyến",
      userMessage: "Khóa Ocean View Studio 12–15/7 để bảo trì",
      thinking: "Đang kiểm tra lịch…",
      reply: "Xong — tôi đã soạn lịch khóa bảo trì. Duyệt để áp dụng vào lịch.",
      cardTitle: "Khóa bảo trì",
      cardMeta: "12–15/7 · 3 đêm · Ocean View Studio",
      draft: "BẢN NHÁP",
      applied: "ĐÃ ÁP DỤNG",
      approve: "Duyệt",
      reject: "Từ chối",
      done: "Đã áp dụng vào lịch",
      placeholder: "Hỏi TLSHost bất cứ điều gì",
    },
    channels: {
      title: "Kênh bán",
      subtitle: "Đồng bộ 2 chiều · 4 kết nối",
      syncNow: "Đồng bộ ngay",
      syncing: "Đang đồng bộ",
      justSynced: "Vừa đồng bộ xong",
      agoStub: "phút trước",
      propertyCount: "chỗ nghỉ",
      priceUpdated: "Đã cập nhật giá",
    },
    housekeeping: {
      title: "Phòng được phân bổ",
      needsCleaning: "cần dọn",
      tabNeeds: "Cần dọn",
      tabAll: "Tất cả phòng",
      dirty: "Bẩn",
      clean: "Sạch",
      markClean: "Đánh dấu sạch",
      encouragement: "Làm tốt lắm — sắp xong rồi",
      rows: [
        { room: "Garden Suite", property: "An Bàng Villa", note: "Trả phòng 11:00" },
        { room: "Sky Loft", property: "An Bàng Villa", note: "Dọn chuyển khách" },
        { room: "Bamboo Room", property: "Hội An House", note: "Khách ở tiếp" },
      ],
    },
    booking: {
      zeroFee: "0% HOA HỒNG",
      propertyName: "An Bàng Beach Villa",
      location: "Hội An, Đà Nẵng",
      perNight: "/ đêm",
      checkIn: "NHẬN PHÒNG",
      checkOut: "TRẢ PHÒNG",
      guests: "KHÁCH",
      nights: "đêm",
      total: "Tổng cộng",
      pickDates: "Chọn ngày",
      book: "Đặt phòng",
      confirmed: "Đã xác nhận đặt phòng",
      confirmSent: "Đã gửi xác nhận cho khách",
      instant: "Xác nhận tức thì",
    },
    team: {
      title: "Đội ngũ & quyền",
      members: "thành viên",
      invite: "Mời",
      inviteColleague: "Mời đồng nghiệp",
      owner: "Chủ nhà",
      collaborator: "Cộng tác viên",
      housekeeper: "Dọn phòng",
      pending: "Đang chờ",
      joined: "Đã tham gia",
      allProperties: "Tất cả chỗ nghỉ",
      propertiesSuffix: "chỗ nghỉ",
      note: "Cộng tác viên chỉ thấy chỗ nghỉ bạn giao.",
    },
    savings: {
      title: "Tiết kiệm hoa hồng",
      subtitle: "3 đêm · An Bàng Villa",
      viaOta: "Qua OTA",
      direct: "Đặt trực tiếp",
      best: "TỐT NHẤT",
      commission: "hoa hồng",
      keepAll: "Giữ 100%",
      youGet: "BẠN NHẬN",
      perBooking: "mỗi lượt đặt, giữ lại",
    },
    approval: {
      title: "Chờ duyệt",
      kind: "HOÀN TIỀN",
      headline: "Hoàn 2.400.000 ₫ cho Linh Trần",
      meta: "Trợ lý AI đề xuất · Đặt phòng #2418",
      reason: "Vượt hạn mức tự duyệt — cần bạn xác nhận",
      approve: "Duyệt",
      reject: "Từ chối",
      note: "Bạn đặt luật. Trợ lý không tự ý hành động.",
    },
    conflict: {
      title: "Đã chặn trùng phòng",
      subtitle: "Garden Suite · 14–17/7",
      kept: "Giữ",
      blocked: "Đã chặn",
      nights: "đêm",
      note: "Đêm trùng bị chặn tức thì trên mọi kênh.",
    },
    board: {
      title: "Buồng phòng",
      subtitle: "Bảng kiểm tra · Hôm nay",
      markAll: "Đánh dấu tất cả đã sạch",
      inspected: "Đã kiểm tra",
      maintenance: "Bảo trì",
      checkout: "Trả phòng",
      turnover: "Chuyển khách",
      stayover: "Khách ở tiếp",
    },
    activity: {
      title: "Hoạt động",
      subtitle: "Theo dõi người tạo",
      live: "Trực tiếp",
      note: "Mỗi bản ghi đều mang tên người tạo.",
      entries: [
        { who: "Mai Lê", what: "tạo đặt phòng #A2391", when: "vừa xong" },
        { who: "Trang Đỗ", what: "dọn xong Garden Suite", when: "8 phút trước" },
        { who: "Hoàng Vũ", what: "sửa kỳ lưu trú Sky Loft", when: "24 phút trước" },
        { who: "Bảo Nguyễn", what: "cấp quyền cho Trang Đỗ", when: "51 phút trước" },
      ],
    },
  },
};

export default vi;
export type Dictionary = typeof vi;
