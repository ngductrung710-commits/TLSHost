/**
 * Vietnamese copy — the source of truth for the Dictionary shape.
 * All wording is original to TLSHost.
 */
const vi = {
  meta: {
    siteName: "TLSHost",
    tagline: "Phần mềm vận hành cho chủ nhà độc lập",
    home: {
      title: "TLSHost — Phần mềm vận hành cho chủ nhà độc lập",
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
    start: "Bắt đầu miễn phí",
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
    eyebrow: "Phần mềm vận hành cho chủ nhà độc lập",
    body: "Một lịch cho mọi chỗ nghỉ. Mọi kênh OTA đồng bộ từng giờ. Một cộng sự AI soạn sẵn việc lặt vặt — và không bao giờ hành động khi chưa có cái gật đầu của bạn.",
    ctaPrimary: "Bắt đầu miễn phí",
    ctaSecondary: "Xem tính năng",
    notes: [
      "Gói miễn phí",
      "Không cần thẻ tín dụng",
      "Sẵn sàng đón khách trong vài phút",
    ],

    /* The hero picker. Choosing a job rewrites the <h1>, the line under the
       grid and the status chip, so the headline is the host's own answer
       rather than ours. Each job carries its own headline: one frame stretched
       across six jobs reads worse than six written for the job they describe.
       `id` keys the icon in Hero.tsx — renaming one here needs it renamed there. */
    /* The rotating headline shown before the picker is touched. Its frame is
       "X của bạn, chạy tự động", so every word in it has to be something that
       genuinely runs unattended — which is why the assistant and permissions
       are not in this list even though they are in the picker below.

       Keep them short. The frame is one unbreakable box as wide as the longest
       word, so a long one eats a whole line on its own and tips the headline
       from two lines to three. */
    rotator: {
      words: ["Đặt phòng", "Kênh OTA", "Buồng phòng", "Thanh toán"],
      tail: "của bạn,",
      emphasis: "chạy tự động.",
    },

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
    /* The heading is split so the opening phrase can carry the serif italic,
       the way the hero does. Rendered in page.tsx, not here — a dictionary
       holds words, not markup. */
    titleEmphasis: "Hàng trăm",
    titleRest: "việc mỗi ngày. Một người duyệt: bạn.",
    body: "TLSHost thay thế bảng tính, các trang đăng nhập kênh và chuỗi tin nhắn bằng một không gian làm việc tự vận hành cả ngày cho bạn.",
  },

  pillars: {
    calendar: {
      eyebrow: "Lịch & vận hành",
      title: "Cả cơ ngơi, trên một bảng",
      body: "Đặt phòng, khóa phòng, dọn phòng và kho phòng trên mọi chỗ nghỉ — trên một bảng lịch nhiều ngày, nhanh, luôn là nguồn thông tin chuẩn duy nhất.",
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
      title: "AI soạn sẵn. Bạn duyệt.",
      body: "Hỏi bằng ngôn ngữ thường ngày. Trợ lý soạn sẵn đặt phòng, chỗ nghỉ, phòng và thanh toán — rồi cho bạn xem chính xác điều gì sẽ thay đổi và chờ bạn gật đầu.",
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
      title: "Mọi kênh luôn chính xác — mọi lúc",
      body: "Đồng bộ iCal hai chiều với Airbnb, Booking.com, Agoda và Traveloka, làm mới từng giờ. Một đêm được đặt ở bất cứ đâu sẽ bị khóa ở mọi nơi.",
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
      title: "Cửa hàng của riêng bạn, 0% hoa hồng",
      body: "Trang đặt phòng đẹp trên liên kết của riêng bạn. Khách đặt trực tiếp, xác nhận tức thì — bạn giữ trọn 100% mỗi lượt đặt.",
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
      title: "Dọn phòng tự vận hành",
      body: "Nhân viên mở điện thoại là thấy ngay phòng nào cần dọn sau trả phòng. Một chạm đánh dấu sạch — cả đội thấy tức thì.",
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
    eyebrow: "Từ một mình đến quy mô lớn",
    title: "Bắt đầu với một căn villa. Lớn lên không giới hạn.",
    body: "Cùng một không gian làm việc cho một chỗ nghỉ hay cả một danh mục — bạn không bao giờ phải đổi công cụ để phát triển.",
    tiers: [
      {
        label: "Chủ nhà cá nhân",
        title: "Đủ mọi thứ bạn cần. Không thứ gì thừa.",
        body: "Một lịch duy nhất, trang đặt phòng của riêng bạn và 0% hoa hồng — làm chủ nhà mà không cần bảng tính.",
        points: ["Một lịch hợp nhất", "Trang đặt phòng riêng của bạn", "0% hoa hồng, vĩnh viễn"],
        link: "Khám phá đặt phòng trực tiếp",
      },
      {
        label: "Đội ngũ đang lớn",
        title: "Một cộng sự AI cho việc lặt vặt",
        body: "Để việc soạn thảo, đồng bộ và xếp lịch chạy tự động, và phân quyền đội ngũ đúng những chỗ nghỉ họ quản lý.",
        points: ["Trợ lý AI vận hành", "Phân quyền theo phạm vi", "Đồng bộ kênh từng giờ"],
        link: "Gặp trợ lý AI",
      },
      {
        label: "Danh mục lớn",
        title: "Quy mô càng lớn, càng nắm chắc",
        body: "Theo dõi người tạo đặt phòng, phân quyền chi tiết và số liệu đa chỗ nghỉ vững vàng ở mọi quy mô.",
        points: ["Số liệu đa chỗ nghỉ", "Theo dõi người tạo đặt phòng", "Phân quyền chi tiết"],
        link: "Khám phá đội ngũ & phân quyền",
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
    primary: "Bắt đầu miễn phí",
    secondary: "Xem bảng giá",
  },

  footer: {
    tagline: "Phần mềm vận hành cho chủ nhà độc lập.",
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
        "Đặt phòng, khóa phòng, kho phòng và dọn phòng trên mọi chỗ nghỉ — trên một bảng lịch nhiều ngày, nhanh, luôn là nguồn thông tin chuẩn.",
    },
    back: "Tất cả tính năng",

    hero: {
      eyebrow: "Lịch & vận hành",
      title: "Một bảng. Bức tranh trọn vẹn.",
      body: "Đặt phòng, khóa phòng, kho phòng và dọn phòng trên mọi chỗ nghỉ — trên một bảng lịch nhiều ngày, nhanh, luôn là nguồn thông tin chuẩn.",
    },

    overview: {
      eyebrow: "Một góc nhìn",
      title: "Mọi chỗ nghỉ, cạnh nhau",
      body: "Quá khứ, hiện tại và tương lai của tất cả chỗ nghỉ và phòng trên một bảng — không đăng nhập từng kênh, không tab bảng tính.",
      bullets: [
        "Xem nhiều chỗ nghỉ, nhiều phòng",
        "Đặt phòng và khóa phòng cạnh nhau",
        "Nhảy nhanh đến bất kỳ ngày hay chỗ nghỉ nào",
        "Công suất trực tiếp trong nháy mắt",
      ],
    },

    control: {
      eyebrow: "Trong tầm kiểm soát",
      title: "Sửa ngay trên bảng",
      body: "Thêm đặt phòng, dời kỳ lưu trú hay khóa một đêm ngay tại chỗ. Thay đổi có hiệu lực tức thì và đổ thẳng vào số liệu tổng quan.",
      bullets: [
        "Tạo và sửa đặt phòng ngay trên bảng",
        "Khóa đêm cho bảo trì hoặc chủ nhà ở",
        "Tình trạng dọn phòng theo từng phòng",
        "Số liệu tổng quan: doanh thu, công suất, nhận phòng",
      ],
    },

    journey: {
      eyebrow: "Phủ mọi chặng",
      title: "Từ đặt phòng đến dọn phòng, không kẽ hở",
      body: "Bảng lịch đi theo hành trình của khách để không gì lọt qua khe.",
      steps: [
        {
          title: "Đặt phòng",
          body: "Đặt phòng và khóa phòng mới hiện lên bảng và cập nhật công suất ngay khi được tạo.",
        },
        {
          title: "Lưu trú",
          body: "Biết ai đang ở, ai sắp đến và ai sắp trả phòng trên mọi chỗ nghỉ.",
        },
        {
          title: "Dọn phòng",
          body: "Tình trạng dọn phòng nằm trên từng phòng, để vị khách kế tiếp không bao giờ là bất ngờ.",
        },
      ],
      always: {
        label: "Cùng AI",
        title: "Trợ lý AI vận hành",
        body: "Nhờ trợ lý vận hành soạn một đặt phòng — nó đề xuất thay đổi, bạn duyệt ngay trên bảng.",
      },
    },

    stats: [
      { value: "1", caption: "Bảng", label: "Bảng cho mọi chỗ nghỉ và phòng" },
      { value: "24/7", caption: "Trợ lý", label: "Trợ lý AI sẵn sàng soạn thay đổi" },
      { value: "0%", caption: "Hoa hồng", label: "Hoa hồng trên đặt phòng trực tiếp, mãi mãi" },
    ],

    faq: {
      title: "Câu hỏi về lịch",
      items: [
        {
          q: "Lịch có hiển thị mọi kênh không?",
          a: "Có. Đặt phòng trực tiếp và đặt phòng đồng bộ từ các OTA đều nằm trên cùng một bảng, nên một đêm không bao giờ bị bán hai lần.",
        },
        {
          q: "Tôi quản lý được nhiều chỗ nghỉ chứ?",
          a: "Bảng lịch sinh ra để đa chỗ nghỉ, đa phòng — quét cả danh mục của bạn mà không cần rời trang.",
        },
        {
          q: "Dọn phòng và số liệu nằm ở đâu?",
          a: "Tình trạng dọn phòng nằm trên từng phòng, còn doanh thu, công suất và lượt nhận phòng sắp tới tự động dồn về trang tổng quan.",
        },
      ],
    },

    cta: {
      title: "Đưa tất cả lên một bảng.",
      body: "Thiết lập chỗ nghỉ đầu tiên và nhận một đặt phòng trực tiếp ngay hôm nay.",
    },
  },

  aiPage: {
    meta: {
      title: "Trợ lý AI vận hành",
      description:
        "Một trợ lý kiểu ChatGPT ngay trong không gian làm việc. Nó lo việc lặt vặt bằng ngôn ngữ thường ngày — và đề xuất mọi thay đổi để bạn duyệt trước.",
    },
    back: "Tất cả tính năng",

    hero: {
      eyebrow: "Trợ lý AI vận hành",
      title: "AI soạn sẵn. Bạn duyệt.",
      body: "Một trợ lý kiểu ChatGPT ngay trong không gian làm việc. Nó lo việc lặt vặt bằng ngôn ngữ thường ngày — và đề xuất mọi thay đổi để bạn duyệt trước.",
    },

    overview: {
      eyebrow: "Ngôn ngữ thường ngày",
      title: "Hỏi như hỏi một đồng nghiệp",
      body: "Tạo đặt phòng, thêm chỗ nghỉ, đặt giá, ghi một khoản thanh toán — cứ mô tả và trợ lý soạn sẵn thay đổi chính xác, vừa làm vừa trình bày lập luận.",
      bullets: [
        "Yêu cầu bằng ngôn ngữ thường ngày",
        "Soạn sẵn đặt phòng, chỗ nghỉ, phòng và thanh toán",
        "Phản hồi hội thoại, phát trực tiếp",
        "Nằm ngay trong không gian làm việc",
      ],
    },

    control: {
      eyebrow: "Bạn đặt luật",
      title: "Không gì nhúc nhích khi bạn chưa gật đầu",
      body: "Mỗi đề xuất đều kèm bản xem trước đầy đủ về điều sẽ thay đổi. Duyệt là có hiệu lực; từ chối là không có gì xảy ra. Nhân đôi sức làm, giữ nguyên quyền kiểm soát.",
      bullets: [
        "Đề xuất kèm bản xem trước đầy đủ",
        "Chủ nhà duyệt mọi thay đổi",
        "Không gì hoạt động ngoài giám sát",
        "Bớt việc lặt vặt, giữ quyền kiểm soát",
      ],
    },

    journey: {
      eyebrow: "Cách hoạt động",
      title: "Bốn bước. Kiểm soát trọn vẹn.",
      body: "Trợ lý nhân đôi thời gian của bạn mà không bao giờ hành động ngoài giám sát.",
      steps: [
        {
          title: "Hỏi",
          body: "Nói điều bạn cần bằng lời của bạn — không biểu mẫu, không menu phải lùng sục.",
        },
        {
          title: "AI soạn",
          body: "Trợ lý đề xuất chính xác thay đổi về đặt phòng, chỗ nghỉ, phòng hay thanh toán.",
        },
        {
          title: "Bạn xem",
          body: "Xem trước đầy đủ điều sẽ thay đổi trước khi bất cứ gì được ghi nhận.",
        },
        {
          title: "Bạn duyệt",
          body: "Một cú bấm là áp dụng vào lịch. Từ chối thì không có gì xảy ra.",
        },
      ],
    },

    stats: [
      { value: "24/7", caption: "Không hết ca", label: "Sẵn sàng cho việc lặt vặt" },
      { value: "100%", caption: "Chờ duyệt", label: "Thay đổi chờ bạn duyệt" },
      { value: "0%", caption: "Hoa hồng", label: "Hoa hồng trên đặt phòng trực tiếp, mãi mãi" },
    ],

    faq: {
      title: "Câu hỏi về trợ lý",
      items: [
        {
          q: "AI có tự ý thay đổi không?",
          a: "Không bao giờ. Trợ lý chỉ đề xuất thay đổi kèm bản xem trước đầy đủ — không gì chạm vào lịch cho đến khi bạn duyệt.",
        },
        {
          q: "Nó làm được những gì?",
          a: "Nó soạn sẵn đặt phòng, chỗ nghỉ, phòng và thanh toán từ một yêu cầu bằng ngôn ngữ thường ngày, rồi chuyển đề xuất cho bạn duyệt.",
        },
        {
          q: "Tôi có phải học lệnh đặc biệt không?",
          a: "Không. Gõ như cách bạn giải thích cho đồng nghiệp — trợ lý đọc ý định và soạn thay đổi.",
        },
      ],
    },

    cta: {
      title: "Giao lại việc lặt vặt.",
      body: "Bạn giữ quyền kiểm soát mọi thay đổi. Bắt đầu miễn phí hôm nay.",
    },
  },

  channelsPage: {
    meta: {
      title: "Đồng bộ kênh",
      description:
        "Đồng bộ iCal hai chiều với Airbnb, Booking.com, Agoda, Traveloka và nhiều kênh khác — tình trạng phòng luôn chính xác ở mọi nơi, tự động.",
    },
    back: "Tất cả tính năng",

    hero: {
      eyebrow: "Đồng bộ kênh",
      title: "Mọi kênh. Không va chạm.",
      body: "Đồng bộ iCal hai chiều với Airbnb, Booking.com, Agoda, Traveloka và nhiều kênh khác — tình trạng phòng luôn chính xác ở mọi nơi, tự động.",
    },

    overview: {
      eyebrow: "Phân phối",
      title: "Bán mọi nơi cùng lúc",
      body: "Kết nối Airbnb, Booking.com, Agoda, Traveloka và bất kỳ OTA nào có iCal. Tình trạng phòng chảy hai chiều — đặt ở kênh này, khóa tức thì ở các kênh còn lại.",
      bullets: [
        "Nhập và xuất iCal hai chiều",
        "Hỗ trợ mọi OTA lớn",
        "Tình trạng phòng luôn chính xác mọi nơi",
        "Kết nối kênh mới trong vài phút",
      ],
    },

    control: {
      eyebrow: "Không trùng đặt phòng",
      title: "Đặt ở đâu, khóa ở mọi nơi",
      body: "Đồng bộ tự chạy mỗi giờ và phản chiếu về mọi kênh đã kết nối — khách đặt trực tiếp và khách đặt trên Airbnb không bao giờ rơi vào cùng một đêm.",
      bullets: [
        "Tự động đồng bộ từng giờ",
        "Thay đổi phản chiếu về mọi kênh",
        "Đặt phòng trực tiếp và OTA trên một lịch",
        "Hết cảnh xoay xở tình trạng phòng thủ công",
      ],
    },

    journey: {
      eyebrow: "Vì sao quan trọng",
      title: "Độ phủ mà không cần làm tay",
      steps: [
        {
          title: "Độ phủ",
          body: "Lên mọi kênh khách của bạn đang tìm, từ một nơi duy nhất.",
        },
        {
          title: "Luôn mới",
          body: "Đồng bộ từng giờ giữ tình trạng phòng chính xác mà bạn không phải động tay.",
        },
        {
          title: "Hai chiều",
          body: "Đặt phòng chảy cả hai hướng — nhập từ OTA, xuất khóa phòng của bạn.",
        },
        {
          title: "Không va chạm",
          body: "Một lịch chung nghĩa là một đêm không bao giờ bị bán hai lần.",
        },
      ],
    },

    stats: [
      { value: "60′", caption: "Mỗi giờ", label: "Đồng bộ hai chiều tự động" },
      { value: "2", caption: "Hai chiều", label: "Đặt phòng vào, lịch khóa ra — cùng một kết nối" },
      { value: "0", caption: "Va chạm", label: "Trùng đặt phòng" },
    ],

    faq: {
      title: "Câu hỏi về đồng bộ kênh",
      items: [
        {
          q: "Đồng bộ hoạt động thế nào?",
          a: "TLSHost kết nối iCal của từng kênh và đồng bộ tình trạng phòng hai chiều — nhập đặt phòng OTA, xuất khóa phòng của bạn — tự động, mỗi giờ.",
        },
        {
          q: "Tôi kết nối được những kênh nào?",
          a: "Bất kỳ OTA nào có iCal, gồm Airbnb, Booking.com, Agoda và Traveloka.",
        },
        {
          q: "Nó có chặn trùng đặt phòng không?",
          a: "Có. Mọi kênh và đặt phòng trực tiếp của bạn dùng chung một lịch, nên một đêm đã đặt ở đâu sẽ bị khóa ở mọi nơi ngay lần đồng bộ kế tiếp.",
        },
      ],
    },

    cta: {
      title: "Bật đồng bộ. Rồi quên nó đi.",
      body: "Kết nối các OTA và chấm dứt trùng đặt phòng, vĩnh viễn.",
    },
  },

  directPage: {
    meta: {
      title: "Trang đặt phòng trực tiếp",
      description:
        "Mỗi chỗ nghỉ có một trang đặt phòng cho khách trên link của riêng bạn. Đặt phòng trực tiếp, không hoa hồng, đổ thẳng vào cùng một lịch.",
    },
    back: "Tất cả tính năng",

    hero: {
      eyebrow: "Trang đặt phòng trực tiếp",
      title: "Cửa hàng của bạn. 100% của bạn.",
      body: "Mỗi chỗ nghỉ có một trang đặt phòng cho khách trên link của riêng bạn. Đặt phòng trực tiếp, không hoa hồng, đổ thẳng vào cùng một lịch.",
    },

    overview: {
      eyebrow: "Cửa hàng của bạn",
      title: "Trang đặt phòng trên link của bạn",
      body: "Chia sẻ ở bất cứ đâu bạn gặp khách — bio, tin nhắn, quảng cáo. Khách xem phòng trống và đặt trực tiếp, không OTA đứng giữa.",
      bullets: [
        "Trang đặt phòng mang thương hiệu của bạn",
        "Link công khai theo từng chỗ nghỉ",
        "Chia sẻ ở bất cứ đâu bạn gặp khách",
        "Đặt phòng trực tiếp đổ thẳng vào lịch",
      ],
    },

    control: {
      eyebrow: "Làm chủ khách hàng",
      title: "Cắt hoa hồng, giữ khách",
      body: "Một đặt phòng trực tiếp là mối quan hệ bạn sở hữu từ cú bấm đầu tiên đến lúc trả phòng — và doanh thu bạn giữ trọn. Không phí trên mỗi lượt đặt, mãi mãi.",
      bullets: [
        "Không hoa hồng trên mỗi lượt đặt",
        "Giữ 100% doanh thu trực tiếp",
        "Sở hữu khách từ cú bấm đến lúc trả phòng",
        "Đặt phòng nằm trên cùng một lịch",
      ],
    },

    journey: {
      eyebrow: "Vì sao trực tiếp thắng",
      title: "Doanh thu và khách hàng — đều của bạn",
      steps: [
        {
          title: "Giữ doanh thu",
          body: "Không ai xén phần trăm — mỗi đặt phòng trực tiếp trả cho bạn trọn vẹn.",
        },
        {
          title: "Làm chủ quan hệ",
          body: "Khách là của bạn, từ cú bấm đầu tiên đến ngày trả phòng.",
        },
        {
          title: "Một lịch",
          body: "Đặt phòng trực tiếp đổ thẳng lên cùng bảng với đặt phòng OTA.",
        },
      ],
    },

    stats: [
      { value: "0%", caption: "Vĩnh viễn", label: "Hoa hồng trên đặt phòng trực tiếp, mãi mãi" },
      { value: "100%", caption: "Của bạn", label: "Doanh thu trực tiếp là của bạn" },
      { value: "1", caption: "Lịch chung", label: "Lịch cho cả đặt phòng trực tiếp và OTA" },
    ],

    faq: {
      title: "Câu hỏi về đặt phòng trực tiếp",
      items: [
        {
          q: "Đã có Airbnb, vì sao cần đặt phòng trực tiếp?",
          a: "OTA mang khách đến, nhưng họ lấy phần trăm mỗi đặt phòng và sở hữu quan hệ với khách. Trang đặt phòng trực tiếp giúp bạn giữ 100% doanh thu và xây danh sách khách của riêng mình.",
        },
        {
          q: "Đặt phòng trực tiếp đi về đâu?",
          a: "Thẳng vào cùng một lịch với đặt phòng OTA, nên tình trạng phòng luôn chính xác mọi nơi, không trùng đặt phòng.",
        },
        {
          q: "Có thật sự không hoa hồng?",
          a: "Có — tuyệt đối. TLSHost là thuê bao cố định. Không có phí trên mỗi lượt đặt trực tiếp, ở bất kỳ gói nào.",
        },
      ],
    },

    cta: {
      title: "Giữ trọn đặt phòng kế tiếp.",
      body: "Mở trang của bạn và giữ từng đồng của đặt phòng tiếp theo.",
    },
  },

  housekeepingPage: {
    meta: {
      title: "Buồng phòng",
      description:
        "Trả phòng tự động thành việc cần dọn. Đội dọn phòng thấy rõ việc cần làm trên bất kỳ điện thoại nào — còn bạn theo dõi trực tiếp trên bảng lịch.",
    },
    back: "Tất cả tính năng",

    hero: {
      eyebrow: "Buồng phòng",
      title: "Mỗi lượt dọn phòng, sạch tinh tươm.",
      body: "Trả phòng tự động thành việc cần dọn. Đội dọn phòng thấy rõ việc cần làm trên bất kỳ điện thoại nào — còn bạn theo dõi trực tiếp trên bảng lịch.",
    },

    overview: {
      eyebrow: "Cho đội dọn phòng",
      title: "Mở điện thoại, thấy ngay việc cần làm",
      body: "Không cần nhóm chat, không cần giấy tờ. Nhân viên đăng nhập là thấy đúng phòng được phân bổ — phòng nào vừa trả, phòng nào chuyển khách và phòng nào cần dọn trước.",
      bullets: [
        "Phòng tự chuyển “Bẩn” ngay khi trả phòng",
        "Ngữ cảnh lễ tân: trả phòng, chuyển khách hay ở tiếp",
        "Một chạm Đánh dấu sạch trên mọi điện thoại",
        "Nhân viên chỉ thấy chỗ nghỉ bạn phân bổ",
      ],
    },

    control: {
      eyebrow: "Cho chủ nhà & quản lý",
      title: "Tiến độ dọn phòng, trực tiếp",
      body: "Bảng kiểm tra hiển thị tình trạng từng phòng bên cạnh khách đến và đi hôm nay. Đặt phòng thành đã kiểm tra, gắn cờ bảo trì, hoặc đánh dấu tất cả đã sạch chỉ một lần.",
      bullets: [
        "Bảng kiểm tra trên toàn bộ phòng",
        "Tình trạng: sạch, bẩn, đã kiểm tra, bảo trì",
        "Trạng thái buồng phòng ngay trên lịch",
        "Đánh dấu tất cả đã sạch trong một cú nhấp",
      ],
    },

    journey: {
      eyebrow: "Từ trả phòng đến nhận phòng",
      title: "Lượt dọn phòng, đâu vào đấy",
      body: "TLSHost dẫn từng phòng qua chu trình dọn dẹp để khách kế tiếp không phải chờ.",
      steps: [
        {
          title: "Trả phòng",
          body: "Khách rời đi, phòng tự chuyển sang bẩn — không ai phải nhớ.",
        },
        {
          title: "Phân bổ",
          body: "Phòng xuất hiện ngay trong danh sách của nhân viên, kèm ngữ cảnh lễ tân.",
        },
        {
          title: "Đã dọn",
          body: "Một chạm đánh dấu sạch. Bảng lịch và cả đội cập nhật tức thì.",
        },
        {
          title: "Đã kiểm tra",
          body: "Quản lý xác nhận bằng dấu đã kiểm tra — sẵn sàng cho lượt nhận phòng kế tiếp.",
        },
      ],
    },

    stats: [
      { value: "1", caption: "Thao tác", label: "Chạm để đánh dấu phòng sạch" },
      { value: "0", caption: "Đã bỏ", label: "Danh sách giấy hay nhóm chat" },
      { value: "100%", caption: "Tự động", label: "Lượt trả phòng tự thành việc cần dọn" },
    ],

    faq: {
      title: "Câu hỏi về buồng phòng",
      items: [
        {
          q: "Nhân viên có cần cài ứng dụng không?",
          a: "Không. Giao diện dọn phòng chạy trên trình duyệt điện thoại và cài ra màn hình chính như ứng dụng — không cần app store.",
        },
        {
          q: "Nhân viên dọn phòng thấy gì?",
          a: "Chỉ chỗ nghỉ và phòng được phân bổ: phòng cần dọn, phòng chuyển khách hôm nay, và nút Đánh dấu sạch. Không thấy giá phòng hay thông tin thanh toán của khách.",
        },
        {
          q: "Phòng chuyển sang bẩn bằng cách nào?",
          a: "Tự động khi trả phòng. Bạn cũng có thể tự gắn cờ phòng bẩn hoặc bảo trì ngay trên lịch hoặc bảng buồng phòng.",
        },
      ],
    },

    cta: {
      title: "Trao siêu năng lực cho đội dọn phòng",
      body: "Thiết lập buồng phòng trong vài phút — có sẵn trong mọi gói TLSHost.",
    },
  },

  teamPage: {
    meta: {
      title: "Đội ngũ & phân quyền",
      description:
        "Giao cho mỗi cộng tác viên đúng chỗ nghỉ họ phụ trách, kiểm soát ai sửa đặt phòng của ai — và xem ai đã tạo từng đặt phòng.",
    },
    back: "Tất cả tính năng",

    hero: {
      eyebrow: "Đội ngũ & phân quyền",
      title: "Quyền truy cập rõ. Trách nhiệm rõ.",
      body: "Giao cho mỗi cộng tác viên đúng chỗ nghỉ họ phụ trách, kiểm soát ai sửa đặt phòng của ai — và xem ai đã tạo từng đặt phòng.",
    },

    overview: {
      eyebrow: "Quyền theo phạm vi",
      title: "Ai cũng chỉ thấy phần của mình",
      body: "Mời cộng tác viên và giao cho mỗi người đúng những chỗ nghỉ, loại phòng họ phụ trách — không hơn. Đúng người quản đúng phòng.",
      bullets: [
        "Quyền chỗ nghỉ & loại phòng theo từng người",
        "Cổng riêng cho cộng tác viên, chỉ xem trong phạm vi",
        "Mời cộng tác viên trong vài cú bấm",
        "Giao diện gọn theo đúng vai trò",
      ],
    },

    control: {
      eyebrow: "Minh bạch",
      title: "Biết ai đã làm gì",
      body: "Quyết định ai được sửa đặt phòng của ai, và xem chính xác ai đã tạo từng đặt phòng. Đội càng lớn, kiểm soát và trách nhiệm càng lớn theo.",
      bullets: [
        "Quyền quản lý đặt phòng của người khác",
        "Theo dõi người tạo đặt phòng",
        "Trách nhiệm rõ ràng trong cả đội",
        "Kiểm soát lớn cùng danh mục của bạn",
      ],
    },

    journey: {
      eyebrow: "Từ một mình đến quy mô lớn",
      title: "Phân quyền lớn cùng đội của bạn",
      body: "Bắt đầu một mình và thêm cộng tác viên khi danh mục lớn dần — không bao giờ phải đổi công cụ.",
      steps: [
        {
          title: "Hiện tại, chỉ mình bạn",
          body: "Tự vận hành mọi thứ hôm nay — và mời người phụ giúp ngay khi bạn sẵn sàng, không cần đổi công cụ.",
        },
        {
          title: "Phân quyền cho đội đang lớn",
          body: "Giao mỗi cộng tác viên đúng những chỗ nghỉ họ quản lý, và theo dõi ai đã tạo từng đặt phòng.",
        },
        {
          title: "Kiểm soát chi tiết ở quy mô lớn",
          body: "Vận hành danh mục lớn với phân quyền và trách nhiệm vững vàng trên nhiều chỗ nghỉ, nhiều cộng tác viên.",
        },
      ],
    },

    stats: [
      { value: "1:1", caption: "Từng người", label: "Quyền chỗ nghỉ & loại phòng" },
      { value: "100%", caption: "Truy vết", label: "Đặt phòng hiển thị người tạo" },
      { value: "24/7", caption: "Trợ lý", label: "Trợ lý AI sẵn sàng cho việc lặt vặt" },
    ],

    faq: {
      title: "Câu hỏi về đội ngũ & phân quyền",
      items: [
        {
          q: "Tôi giới hạn được những gì cộng tác viên thấy?",
          a: "Có. Mỗi cộng tác viên chỉ thấy đúng những chỗ nghỉ, loại phòng họ phụ trách, với một cổng riêng chỉ xem trong phạm vi.",
        },
        {
          q: "Cộng tác viên sửa được đặt phòng của nhau không?",
          a: "Chỉ khi bạn cho phép. Bạn kiểm soát ai được quản lý đặt phòng của người khác, và mỗi đặt phòng ghi lại người tạo.",
        },
        {
          q: "Có cổng riêng cho cộng tác viên không?",
          a: "Có — cộng tác viên đăng nhập vào một cổng riêng, chỉ xem trong phạm vi, tách khỏi không gian của chủ nhà.",
        },
      ],
    },

    cta: {
      title: "Đưa cả đội lên thuyền.",
      body: "Phân quyền từng người, theo dõi từng đặt phòng. Bắt đầu miễn phí hôm nay.",
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
