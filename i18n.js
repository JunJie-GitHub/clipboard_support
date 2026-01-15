// Internationalization (i18n) support for Clipboard Safe website
// Default language: English

const translations = {
    en: {
        // Navigation
        nav_home: 'Home',
        nav_changelog: 'Changelog',
        nav_support: 'Support',
        nav_privacy: 'Privacy Policy',
        
        // Index page
        page_title_home: 'Clipboard Safe - Intelligent Clipboard Manager',
        page_title_changelog: 'Changelog - Clipboard Safe',
        hero_title: 'Clipboard Safe',
        hero_subtitle: 'Intelligent Clipboard Manager for Mac',
        hero_description: 'Make your copy-paste workflow more efficient and convenient',
        btn_learn_more: 'Learn More',
        btn_get_support: 'Get Support',
        appstore_badge_small: 'Download on the',
        appstore_badge_big: 'Mac App Store',
        
        // Features section
        section_features: 'Core Features',
        feature1_title: 'Automatic Clipboard Management',
        feature1_desc1: 'Automatically save all your copied content without extra operations',
        feature1_desc2: 'Review history anytime, never worry about losing copied content',
        
        feature2_title: 'Quick Search',
        feature2_desc1: 'One-click quick access to history',
        feature2_desc2: 'Smart search to quickly find what you need',
        
        feature3_title: 'Quick Access',
        feature3_desc1: 'Default shortcut Command+V to open clipboard panel',
        feature3_desc2: 'One-click paste to any application',
        feature3_desc3: 'Customizable shortcut to fit your workflow',
        
        feature4_title: 'Adjustable History Limit',
        feature4_desc1: 'Set the number of saved items according to your needs',
        feature4_desc2: 'From 20 to 2000 entries, you are in control',
        
        feature5_title: 'Privacy Protection',
        feature5_desc1: 'All data saved only on your Mac',
        feature5_desc2: 'App runs completely offline, no internet required',
        feature5_desc3: 'Never collect or upload any clipboard content',
        
        feature6_title: 'Secure and Reliable',
        feature6_desc1: 'Local data encryption for security',
        feature6_desc2: 'Privacy first from the very beginning',
        
        // Privacy highlight section
        section_privacy_first: 'Privacy First',
        privacy_intro: 'Clipboard Safe prioritizes privacy from the very beginning. We understand the sensitivity of clipboard content and have taken multiple measures to ensure your data security:',
        privacy_item1: '<strong>Local Storage:</strong> All data is saved only on your Mac and never leaves your device',
        privacy_item2: '<strong>No Internet Required:</strong> App runs completely offline, never connects to any servers',
        privacy_item3: '<strong>Zero Data Collection:</strong> Never collect or upload any clipboard content',
        privacy_item4: '<strong>Local Encryption:</strong> Data is encrypted locally for security',
        btn_view_privacy: 'View Full Privacy Policy',
        
        // CTA section
        cta_title: 'Ready to Boost Your Productivity?',
        cta_description: 'Download Clipboard Safe from the Mac App Store and start your efficient workflow',
        btn_get_tech_support: 'Get Technical Support',
        btn_learn_privacy: 'Learn About Privacy Policy',
        
        // Footer
        footer_copyright: '© 2026 Clipboard Safe. All rights reserved.',
        
        // Support page
        page_title_support: 'Technical Support - Clipboard Safe',
        page_header_support: 'Technical Support',
        page_header_support_desc: 'We are here to help you anytime',
        
        support_faq_title: 'Frequently Asked Questions',
        
        faq1_question: '❓ How do I start using Clipboard Safe?',
        faq1_answer: 'Simply launch the app and start copying! Clipboard Safe will automatically save your copied content. No special permissions are needed for reading clipboard content. Accessibility permission is only requested when you try to paste content from the app.',
        
        faq2_question: '❓ Why do I need Accessibility permissions?',
        faq2_answer: 'Accessibility permission is only needed for pasting clipboard content to other apps. When you click on clipboard history to paste, the app writes the content to the system clipboard and simulates Command+V to paste it into the foreground app. This permission is requested on-demand when you try to paste. The app does not use accessibility to monitor keyboard events like Command+C.',
        
        faq4_question: '❓ How do I search history?',
        faq4_answer: 'Click the app icon to open the history panel, then enter keywords in the search box for quick lookup. Supports full-text search to help you quickly find what you need.',
        
        faq5_question: '❓ How long is history saved?',
        faq5_answer: 'The history limit can be adjusted in settings, ranging from 20 to 2000 entries. When the limit is reached, the oldest records are automatically deleted. You can also manually clear all history.',
        
        faq6_question: '❓ Is my data safe?',
        faq6_answer: 'Absolutely safe! Clipboard Safe:',
        faq6_item1: 'All data is saved only locally on your Mac',
        faq6_item2: 'No internet connection required, runs completely offline',
        faq6_item3: 'Does not collect or upload any user data',
        faq6_item4: 'Data is encrypted and stored locally',
        
        faq7_question: '❓ How do I uninstall the app?',
        faq7_answer: 'Drag the app from the Applications folder to the Trash.',
        
        support_requirements_title: 'System Requirements',
        req_os: '<strong>Operating System:</strong> macOS 14.0 or higher',
        req_arch: '<strong>Architecture:</strong> Supports Intel and Apple Silicon (M1/M2/M3) chips',
        req_permissions: '<strong>Permissions:</strong> Accessibility permissions (only for paste functionality)',
        req_disk: '<strong>Disk Space:</strong> Minimum 10 MB',
        
        support_contact_title: 'Contact Us',
        contact_intro: 'If you encounter any issues or have suggestions, please contact us:',
        contact_email_title: 'Email',
        contact_email_desc: 'Send email to: smilejie2020@foxmail.com',
        contact_github_title: 'GitHub Issues',
        contact_github_desc: 'Submit issue feedback on our GitHub repository',
        contact_response_time: 'We typically respond to your inquiries within 24-48 hours.',
        
        support_troubleshooting_title: 'Troubleshooting',
        
        trouble1_title: '🔧 App will not start',
        trouble1_solution: '<strong>Solution:</strong>',
        trouble1_step1: 'Ensure your macOS version meets system requirements (14.0 or higher)',
        trouble1_step2: 'Try restarting your Mac',
        trouble1_step3: 'Download and reinstall the app',
        
        trouble2_title: '🔧 Cannot paste clipboard content',
        trouble2_solution: '<strong>Solution:</strong>',
        trouble2_step1: 'Pasting requires Accessibility permissions. When you try to paste, the app will prompt you to enable this permission',
        trouble2_step2: 'Go to System Preferences > Security & Privacy > Privacy > Accessibility',
        trouble2_step3: 'Ensure Clipboard Safe is checked and enabled',
        trouble2_step4: 'If already checked, try unchecking and rechecking. Note: Clipboard content reading does not require accessibility permissions',
        
        trouble3_title: '🔧 Shortcuts not working',
        trouble3_solution: '<strong>Solution:</strong>',
        trouble3_step1: 'Confirm Accessibility permissions have been granted correctly',
        trouble3_step2: 'Check if other apps are using the same shortcuts',
        trouble3_step3: 'Try reconfiguring shortcuts in app settings',
        
        support_more_help_title: 'Need More Help?',
        more_help_intro: 'Visit our other resources:',
        help_link_home: 'Return Home',
        help_link_privacy: 'Privacy Policy',
        
        // Privacy page
        page_title_privacy: 'Privacy Policy - Clipboard Safe',
        page_header_privacy: 'Privacy Policy',
        privacy_update_date: 'Last updated: January 13, 2026',
        
        // Privacy sections
        privacy_section1_title: '1. Introduction',
        privacy_section1_p1: 'Welcome to Clipboard Safe (hereinafter referred to as "this app", "we"). We take your privacy and data security very seriously. This privacy policy details how this app handles your information and the measures we take to protect your privacy.',
        privacy_section1_p2: 'By using this app, you agree to the terms of this privacy policy. If you do not agree with this policy, please do not use this app.',
        
        privacy_section2_title: '2. Information Collection',
        privacy_section2_1_title: '2.1 Information We Do Not Collect',
        privacy_section2_1_p: '<strong>This app adopts a fully localized design philosophy and does not collect, transmit, or store any user data to remote servers.</strong> Specifically:',
        privacy_section2_1_item1: '<strong>Clipboard Content:</strong> We do not collect, upload, or transmit any content you copy to the clipboard',
        privacy_section2_1_item2: '<strong>Personal Information:</strong> We do not collect your name, email address, phone number, or other personal identification information',
        privacy_section2_1_item3: '<strong>Device Information:</strong> We do not collect your device identifiers, hardware model, operating system version, or other device information',
        privacy_section2_1_item4: '<strong>Usage Data:</strong> We do not collect analytics data or statistics about how you use this app',
        privacy_section2_1_item5: '<strong>Location Information:</strong> We do not collect or access your geographic location information',
        privacy_section2_1_item6: '<strong>Contacts and Communications:</strong> We do not access your contacts or any communication information',
        
        privacy_section2_2_title: '2.2 Local Data Storage',
        privacy_section2_2_p1: 'This app only stores the following information locally on your Mac device:',
        privacy_section2_2_item1: '<strong>Clipboard History:</strong> Content you copy is saved in a local database, stored only on your device',
        privacy_section2_2_item2: '<strong>App Settings:</strong> Your personal preferences (such as history limit, trigger mode, etc.) are saved in local configuration files',
        privacy_section2_2_p2: '<strong>All this data is stored only on your device, never leaves your Mac, and is not uploaded to any server.</strong>',
        
        privacy_section3_title: '3. Permission Explanation',
        privacy_section3_1_title: '3.1 Accessibility Permission',
        privacy_section3_1_p1: 'This app requires macOS Accessibility permission for specific functions. This permission is used for:',
        privacy_section3_1_item1: '<strong>Pasting Clipboard Content:</strong> When you click on clipboard history content and want to paste it into the foreground app, this app needs to simulate Command+V keyboard events to implement paste functionality. This is because the clipboard cannot directly "inject" content into other apps; it can only make the foreground app respond to paste operations by simulating keyboard events',
        privacy_section3_1_p2: '<strong>Important Notes:</strong>',
        privacy_section3_1_item2: '<strong>On-Demand Request:</strong> We only request Accessibility permission when you need to use the paste function. When you try to click clipboard content to paste into a foreground app, if Accessibility is not yet enabled, the app will prompt you to enable this permission',
        privacy_section3_1_item3: '<strong>Paste Process:</strong> The paste operation consists of two steps: (1) Write the selected content to the system clipboard; (2) Simulate pressing Command+V shortcut to make the foreground app respond to paste',
        privacy_section3_1_item4: '<strong>Does Not Monitor Keyboard Events:</strong> This app does not use Accessibility to monitor your keyboard operations (such as Command+C), nor does it monitor any operations you perform in other apps',
        privacy_section3_1_item5: 'Accessibility permission is only used to implement paste functionality and will not be used to monitor other apps or collect any other information',
        privacy_section3_1_item6: 'All data obtained through this permission is only processed and stored locally and will not be transmitted anywhere',
        privacy_section3_1_item7: 'You can revoke this permission at any time in "System Preferences" > "Security & Privacy" > "Privacy" > "Accessibility". After revocation, paste functionality will be unavailable, but you can still view clipboard history',
        
        privacy_section3_2_title: '3.2 No Network Connection Required',
        privacy_section3_2_p1: 'This app runs completely offline and does not require an internet connection. The app will not:',
        privacy_section3_2_item1: 'Send data to any server',
        privacy_section3_2_item2: 'Download content from the internet',
        privacy_section3_2_item3: 'Communicate with any third-party services',
        
        privacy_section4_title: '4. Data Use',
        privacy_section4_p: 'Since we do not collect any user data, there is no issue of data use. All data you generate while using this app:',
        privacy_section4_item1: 'Is saved only on your local device',
        privacy_section4_item2: 'Is used only for app functionality',
        privacy_section4_item3: 'Is completely controlled and managed by you',
        privacy_section4_item4: 'Can be deleted by you at any time',
        
        privacy_section5_title: '5. Data Security',
        privacy_section5_p: 'We take the following measures to protect your data security:',
        privacy_section5_item1: '<strong>Local Encryption:</strong> All clipboard history saved locally is encrypted',
        privacy_section5_item2: '<strong>No Network Transmission:</strong> The app does not connect to the internet, so there is no risk of data being intercepted during transmission',
        privacy_section5_item3: '<strong>No Third-Party Access:</strong> Does not use any third-party services or SDKs, your data will not be accessed by third parties',
        privacy_section5_item4: '<strong>Sandbox Protection:</strong> The app runs in the macOS sandbox environment, complying with Apple\'s security standards',
        
        privacy_section6_title: '6. Data Sharing and Disclosure',
        privacy_section6_p1: '<strong>We will not share, sell, rent, or exchange any of your data with any third party.</strong>',
        privacy_section6_p2: 'Since this app does not collect any user data, there is no data sharing or disclosure. All your data always remains on your device, completely under your control.',
        
        privacy_section7_title: '7. Third-Party Services',
        privacy_section7_p: 'This app does not integrate any third-party services, analytics tools, advertising networks, or social media plugins. The app operates completely independently and does not depend on any external services.',
        
        privacy_section8_title: '8. Children\'s Privacy',
        privacy_section8_p: 'This app is suitable for users of all ages. Since we do not collect any personal information, we do not knowingly collect personal information from children under 13. Parents and guardians can safely allow children to use this app.',
        
        privacy_section9_title: '9. Data Retention and Deletion',
        privacy_section9_1_title: '9.1 Data Retention',
        privacy_section9_1_item1: 'Clipboard history is saved according to the quantity limit you specify in settings (20-2000 entries)',
        privacy_section9_1_item2: 'When the limit is reached, the oldest records are automatically deleted',
        privacy_section9_1_item3: 'All data is stored only on your local device',
        
        privacy_section9_2_title: '9.2 Deleting Data',
        privacy_section9_2_p: 'You can delete data saved by the app at any time:',
        privacy_section9_2_item1: '<strong>Delete Single Record:</strong> Delete specific items from the history list',
        privacy_section9_2_item2: '<strong>Clear All Records:</strong> Use the "Clear History" function in app settings',
        privacy_section9_2_item3: '<strong>Complete Deletion:</strong> Uninstalling the app will automatically delete all locally stored data',
        
        privacy_section10_title: '10. Your Rights',
        privacy_section10_p: 'Since all data is stored on your local device, you have complete control:',
        privacy_section10_item1: '<strong>Right of Access:</strong> You can view all saved clipboard history at any time',
        privacy_section10_item2: '<strong>Right to Modify:</strong> Although the app is primarily for viewing history, you can delete unwanted content',
        privacy_section10_item3: '<strong>Right to Delete:</strong> You can delete some or all history at any time',
        privacy_section10_item4: '<strong>Right to Control:</strong> You can revoke the app\'s Accessibility permission through system settings. After revocation, paste functionality will be unavailable, but you can still view clipboard history',
        
        privacy_section11_title: '11. Changes to Privacy Policy',
        privacy_section11_p1: 'We may update this privacy policy from time to time. For significant changes, we will notify you through in-app notifications or app update notes. We recommend that you review this page regularly to stay informed of any changes.',
        privacy_section11_p2: 'The last update date of this privacy policy is shown at the top of the page. Continued use of this app indicates your acceptance of the updated privacy policy.',
        
        privacy_section12_title: '12. International Users',
        privacy_section12_p: 'Since this app does not collect or transmit any data, there is no issue of cross-border data transfer. Wherever you are, your data always remains on your device.',
        
        privacy_section13_title: '13. Compliance Statement',
        privacy_section13_p: 'The design and operation of this app comply with the following privacy and data protection regulations:',
        privacy_section13_item1: '<strong>Apple App Store Review Guidelines:</strong> Strictly complies with Apple\'s privacy and security requirements',
        privacy_section13_item2: '<strong>GDPR (General Data Protection Regulation):</strong> Although we do not collect data, our practices are in line with GDPR\'s privacy protection spirit',
        privacy_section13_item3: '<strong>CCPA (California Consumer Privacy Act):</strong> Fully complies with data privacy requirements',
        
        privacy_section14_title: '14. Contact Us',
        privacy_section14_p1: 'If you have any questions, comments, or requests regarding this privacy policy, please contact us through the following:',
        privacy_section14_email: '<strong>Email:</strong> smilejie2020@foxmail.com',
        privacy_section14_support: '<strong>Technical Support:</strong> <a href="support.html">Visit Technical Support Page</a>',
        privacy_section14_p2: 'We will respond to your inquiries as soon as possible, typically within 24-48 hours.',
        
        privacy_section15_title: '15. Privacy Policy Summary',
        privacy_section15_intro: '<strong>In short, this app\'s commitment to your privacy is:</strong>',
        privacy_section15_item1: '✔ <strong>Zero Data Collection:</strong> We do not collect any user data',
        privacy_section15_item2: '✔ <strong>Completely Local:</strong> All data is saved only on your Mac',
        privacy_section15_item3: '✔ <strong>Completely Offline:</strong> The app does not require a network connection and does not communicate with any servers',
        privacy_section15_item4: '✔ <strong>No Data Sharing:</strong> Does not share data with any third parties',
        privacy_section15_item5: '✔ <strong>Local Encryption:</strong> Local data is encrypted for protection',
        privacy_section15_item6: '✔ <strong>You Have Control:</strong> You can view and delete your data at any time',
        privacy_section15_item7: '✔ <strong>Transparent Permission Use:</strong> Accessibility permission is only used for paste functionality, requested on-demand, not used for other purposes',
        privacy_section15_note: '<strong>Your privacy is our top priority.</strong> We have prioritized privacy protection from the very beginning, ensuring that your clipboard content never leaves your device.',
        
        // Changelog page
        page_title_changelog: 'Changelog - Clipboard Safe',
        changelog_title: 'Changelog',
        changelog_subtitle: 'Track all updates and improvements to Clipboard Safe'
    },
    zh: {
        // Navigation
        nav_home: '首页',
        nav_changelog: '更新日志',
        nav_support: '技术支持',
        nav_privacy: '隐私政策',
        
        // Index page
        page_title_home: 'Clipboard Safe - 智能剪贴板管理工具',
        page_title_changelog: '更新日志 - Clipboard Safe',
        hero_title: 'Clipboard Safe',
        hero_subtitle: '为 Mac 打造的智能剪贴板管理工具',
        hero_description: '让你的复制粘贴工作流更高效、更便捷',
        btn_learn_more: '了解更多',
        btn_get_support: '获取支持',
        appstore_badge_small: '下载于',
        appstore_badge_big: 'Mac App Store',
        
        // Features section
        section_features: '核心功能',
        feature1_title: '自动剪贴板管理',
        feature1_desc1: '自动保存你所有复制的内容，无需额外操作',
        feature1_desc2: '随时回看历史记录，再也不用担心复制内容丢失',
        
        feature2_title: '快速搜索',
        feature2_desc1: '一键快速访问历史记录',
        feature2_desc2: '智能搜索功能，快速找到你需要的内容',
        
        feature3_title: '快捷访问',
        feature3_desc1: '默认通过 Option+V 快速呼出剪贴板面板',
        feature3_desc2: '一键复制内容，你可以粘贴内容到任意应用',
        feature3_desc3: '支持自定义快捷键，适应你的工作习惯',
        
        feature4_title: '历史记录上限可调',
        feature4_desc1: '根据你的需求设置保存数量',
        feature4_desc2: '从 20 到 2000 条全由你掌控',
        
        feature5_title: '注重隐私保护',
        feature5_desc1: '所有数据仅保存在你的 Mac 上',
        feature5_desc2: '应用完全离线运行，无需联网',
        feature5_desc3: '绝不收集或上传任何剪贴板内容',
        
        feature6_title: '安全可靠',
        feature6_desc1: '数据本地加密保障安全',
        feature6_desc2: '从设计之初就将隐私放在首位',
        
        // Privacy highlight section
        section_privacy_first: '隐私第一',
        privacy_intro: 'Clipboard Safe从设计之初就将隐私放在首位。我们深知剪贴板内容的敏感性，因此采取了多重措施确保你的数据安全：',
        privacy_item1: '<strong>本地存储：</strong>所有数据仅保存在你的 Mac 上，永不离开你的设备',
        privacy_item2: '<strong>无需联网：</strong>应用完全离线运行，不会连接任何服务器',
        privacy_item3: '<strong>零数据收集：</strong>绝不收集或上传任何剪贴板内容',
        privacy_item4: '<strong>本地加密：</strong>数据本地加密保障安全',
        btn_view_privacy: '查看完整隐私政策',
        
        // CTA section
        cta_title: '准备好提升你的效率了吗？',
        cta_description: '在 Mac App Store 下载Clipboard Safe，开启高效工作之旅',
        btn_get_tech_support: '获取技术支持',
        btn_learn_privacy: '了解隐私政策',
        
        // Footer
        footer_copyright: '© 2026 Clipboard Safe. 保留所有权利.',
        
        // Support page
        page_title_support: '技术支持 - Clipboard Safe',
        page_header_support: '技术支持',
        page_header_support_desc: '我们随时为您提供帮助',
        
        support_faq_title: '常见问题',
        
        faq1_question: '❓ 如何开始使用Clipboard Safe？',
        faq1_answer: '启动应用后即可开始使用！Clipboard Safe会自动保存您复制的内容。读取剪贴板内容不需要特殊权限。只有当您尝试从应用中粘贴内容时，才会请求辅助功能权限。',
        
        faq2_question: '❓ 为什么需要辅助功能权限？',
        faq2_answer: '辅助功能权限仅在粘贴剪贴板内容到其他应用时需要。当您点击剪贴板历史记录粘贴时，应用会将内容写入系统剪贴板，并模拟 Command+V 将其粘贴到前台应用。该权限在您尝试粘贴时按需请求。应用不会使用辅助功能监听键盘事件（如 Command+C）。',
        
        faq4_question: '❓ 如何搜索历史记录？',
        faq4_answer: '点击应用图标打开历史记录面板，在搜索框中输入关键词即可快速查找。支持全文搜索，帮助您快速找到需要的内容。',
        
        faq5_question: '❓ 历史记录会保存多久？',
        faq5_answer: '历史记录的数量限制可在设置中调整，范围从 20 到 2000 条。达到上限后，最早的记录会被自动删除。您也可以手动清空所有历史记录。',
        
        faq6_question: '❓ 我的数据安全吗？',
        faq6_answer: '绝对安全！Clipboard Safe：',
        faq6_item1: '所有数据仅保存在您的 Mac 本地',
        faq6_item2: '不需要网络连接，完全离线运行',
        faq6_item3: '不收集、不上传任何用户数据',
        faq6_item4: '数据本地加密存储',
        
        faq7_question: '❓ 如何卸载应用？',
        faq7_answer: '将应用从 应用程序 文件夹拖到废纸篓即可。',
        
        support_requirements_title: '系统要求',
        req_os: '<strong>操作系统：</strong>macOS 14.0 或更高版本',
        req_arch: '<strong>架构支持：</strong>支持 Intel 和 Apple Silicon (M1/M2/M3) 芯片',
        req_permissions: '<strong>权限要求：</strong>辅助功能权限（仅用于粘贴功能）',
        req_disk: '<strong>磁盘空间：</strong>最少 10 MB',
        
        support_contact_title: '联系我们',
        contact_intro: '如果您遇到问题或有任何建议，请通过以下方式联系我们：',
        contact_email_title: '电子邮件',
        contact_email_desc: '发送邮件至：smilejie2020@foxmail.com',
        contact_github_title: 'GitHub Issues',
        contact_github_desc: '在我们的 GitHub 仓库提交问题反馈',
        contact_response_time: '我们通常会在 24-48 小时内回复您的问题。',
        
        support_troubleshooting_title: '故障排除',
        
        trouble1_title: '🔧 应用无法启动',
        trouble1_solution: '<strong>解决方案：</strong>',
        trouble1_step1: '确保您的 macOS 版本符合系统要求（14.0 或更高）',
        trouble1_step2: '尝试重启 Mac',
        trouble1_step3: '重新下载并安装应用',
        
        trouble2_title: '🔧 无法粘贴剪贴板内容',
        trouble2_solution: '<strong>解决方案：</strong>',
        trouble2_step1: '粘贴功能需要辅助功能权限。当您尝试粘贴时，应用会提示您开启该权限',
        trouble2_step2: '前往 系统偏好设置 > 安全性与隐私 > 隐私 > 辅助功能',
        trouble2_step3: '确保Clipboard Safe已勾选并启用',
        trouble2_step4: '如已勾选，尝试取消勾选后重新勾选。注意：读取剪贴板内容不需要辅助功能权限',
        
        trouble3_title: '🔧 快捷键不工作',
        trouble3_solution: '<strong>解决方案：</strong>',
        trouble3_step1: '确认辅助功能权限已正确授予',
        trouble3_step2: '检查是否有其他应用占用了相同的快捷键',
        trouble3_step3: '尝试在应用设置中重新配置快捷键',
        
        support_more_help_title: '需要更多帮助？',
        more_help_intro: '访问我们的其他资源：',
        help_link_home: '返回首页',
        help_link_privacy: '隐私政策',
        
        // Privacy page
        page_title_privacy: '隐私政策 - Clipboard Safe',
        page_header_privacy: '隐私政策',
        privacy_update_date: '最后更新日期：2026年1月13日',
        
        // Privacy sections
        privacy_section1_title: '1. 引言',
        privacy_section1_p1: '欢迎使用 Clipboard Safe（以下简称"本应用"、"我们"）。我们非常重视您的隐私和数据安全。本隐私政策详细说明了本应用如何处理您的信息以及我们采取的保护措施。',
        privacy_section1_p2: '使用本应用即表示您同意本隐私政策的条款。如果您不同意本政策，请不要使用本应用。',
        
        privacy_section2_title: '2. 信息收集',
        privacy_section2_1_title: '2.1 我们不收集的信息',
        privacy_section2_1_p: '<strong>本应用采用完全本地化的设计理念，不会收集、传输或存储任何用户数据到远程服务器。</strong>具体而言：',
        privacy_section2_1_item1: '<strong>剪贴板内容：</strong>我们不会收集、上传或传输任何您复制到剪贴板的内容',
        privacy_section2_1_item2: '<strong>个人身份信息：</strong>我们不收集您的姓名、电子邮件地址、电话号码或其他个人识别信息',
        privacy_section2_1_item3: '<strong>设备信息：</strong>我们不收集您的设备标识符、硬件型号、操作系统版本或其他设备信息',
        privacy_section2_1_item4: '<strong>使用数据：</strong>我们不收集您如何使用本应用的分析数据或统计信息',
        privacy_section2_1_item5: '<strong>位置信息：</strong>我们不收集或访问您的地理位置信息',
        privacy_section2_1_item6: '<strong>联系人和通讯信息：</strong>我们不访问您的通讯录或任何通讯信息',
        
        privacy_section2_2_title: '2.2 本地数据存储',
        privacy_section2_2_p1: '本应用仅在您的 Mac 设备上本地存储以下信息：',
        privacy_section2_2_item1: '<strong>剪贴板历史记录：</strong>您复制的内容保存在本地数据库中，仅存储在您的设备上',
        privacy_section2_2_item2: '<strong>应用设置：</strong>您的个人偏好设置（如历史记录上限、触发方式等）保存在本地配置文件中',
        privacy_section2_2_p2: '<strong>所有这些数据仅存储在您的设备上，永不离开您的 Mac，也不会被上传到任何服务器。</strong>',
        
        privacy_section3_title: '3. 权限说明',
        privacy_section3_1_title: '3.1 辅助功能权限',
        privacy_section3_1_p1: '本应用在特定功能下需要请求 macOS 的辅助功能（Accessibility）权限。该权限用于：',
        privacy_section3_1_item1: '<strong>粘贴剪贴板内容：</strong>当您点击剪贴板历史记录中的内容并希望粘贴到前台应用时，本应用需要通过模拟 Command+V 键盘事件来实现粘贴功能。这是因为剪贴板无法直接将内容"注入"到其他应用中，只能通过模拟键盘事件让前台应用响应粘贴操作',
        privacy_section3_1_p2: '<strong>重要说明：</strong>',
        privacy_section3_1_item2: '<strong>按需申请：</strong>我们会在您需要使用粘贴功能时才申请辅助功能权限。当您尝试点击剪贴板内容粘贴到前台应用时，如果尚未开启辅助功能，应用会提示您开启该权限',
        privacy_section3_1_item3: '<strong>粘贴流程：</strong>粘贴操作分为两步：(1) 将您选中的内容写入系统剪贴板；(2) 模拟按下 Command+V 快捷键，让前台应用响应粘贴',
        privacy_section3_1_item4: '<strong>不监听键盘事件：</strong>本应用不使用辅助功能来监听您的键盘操作（如 Command+C），也不会监控您在其他应用中的任何操作',
        privacy_section3_1_item5: '辅助功能权限仅用于实现粘贴功能，不会被用于监控其他应用或收集您的任何其他信息',
        privacy_section3_1_item6: '所有通过该权限获取的数据仅在本地处理和存储，不会传输到任何地方',
        privacy_section3_1_item7: '您可以随时在"系统偏好设置" > "安全性与隐私" > "隐私" > "辅助功能"中撤销此权限。撤销后，粘贴功能将无法使用，但您仍可查看剪贴板历史记录',
        
        privacy_section3_2_title: '3.2 无需网络连接',
        privacy_section3_2_p1: '本应用完全离线运行，不需要互联网连接。应用不会：',
        privacy_section3_2_item1: '向任何服务器发送数据',
        privacy_section3_2_item2: '从互联网下载内容',
        privacy_section3_2_item3: '与任何第三方服务通信',
        
        privacy_section4_title: '4. 数据使用',
        privacy_section4_p: '由于我们不收集任何用户数据，因此不存在数据使用的问题。您在使用本应用时产生的所有数据：',
        privacy_section4_item1: '仅保存在您的本地设备上',
        privacy_section4_item2: '仅用于应用的功能运行',
        privacy_section4_item3: '完全由您控制和管理',
        privacy_section4_item4: '可以随时由您删除',
        
        privacy_section5_title: '5. 数据安全',
        privacy_section5_p: '我们采取以下措施保护您的数据安全：',
        privacy_section5_item1: '<strong>本地加密：</strong>所有保存在本地的剪贴板历史记录都经过加密处理',
        privacy_section5_item2: '<strong>无网络传输：</strong>应用不连接互联网，因此不存在数据在传输过程中被截获的风险',
        privacy_section5_item3: '<strong>无第三方访问：</strong>不使用任何第三方服务或 SDK，您的数据不会被第三方访问',
        privacy_section5_item4: '<strong>沙盒保护：</strong>应用在 macOS 沙盒环境中运行，符合 Apple 的安全标准',
        
        privacy_section6_title: '6. 数据共享和披露',
        privacy_section6_p1: '<strong>我们不会与任何第三方共享、出售、租赁或交换您的任何数据。</strong>',
        privacy_section6_p2: '由于本应用不收集任何用户数据，因此不存在数据共享或披露的情况。您的所有数据始终保留在您的设备上，完全由您控制。',
        
        privacy_section7_title: '7. 第三方服务',
        privacy_section7_p: '本应用不集成任何第三方服务、分析工具、广告网络或社交媒体插件。应用的运行完全独立，不依赖于任何外部服务。',
        
        privacy_section8_title: '8. 儿童隐私',
        privacy_section8_p: '本应用适合所有年龄段的用户使用。由于我们不收集任何个人信息，因此不会有意识地收集 13 岁以下儿童的个人信息。家长和监护人可以放心让儿童使用本应用。',
        
        privacy_section9_title: '9. 数据保留和删除',
        privacy_section9_1_title: '9.1 数据保留',
        privacy_section9_1_item1: '剪贴板历史记录根据您在设置中指定的数量上限保存（20-2000条）',
        privacy_section9_1_item2: '当达到上限时，最早的记录会被自动删除',
        privacy_section9_1_item3: '所有数据仅存储在您的本地设备上',
        
        privacy_section9_2_title: '9.2 删除数据',
        privacy_section9_2_p: '您可以随时删除应用保存的数据：',
        privacy_section9_2_item1: '<strong>删除单条记录：</strong>在历史记录列表中删除特定项目',
        privacy_section9_2_item2: '<strong>清空所有记录：</strong>在应用设置中使用"清空历史记录"功能',
        privacy_section9_2_item3: '<strong>完全删除：</strong>卸载应用将自动删除所有本地存储的数据',
        
        privacy_section10_title: '10. 您的权利',
        privacy_section10_p: '由于所有数据都存储在您的本地设备上，您拥有完全的控制权：',
        privacy_section10_item1: '<strong>访问权：</strong>您可以随时查看保存的所有剪贴板历史记录',
        privacy_section10_item2: '<strong>修改权：</strong>虽然应用主要用于查看历史记录，但您可以删除不需要的内容',
        privacy_section10_item3: '<strong>删除权：</strong>您可以随时删除部分或全部历史记录',
        privacy_section10_item4: '<strong>控制权：</strong>您可以通过系统设置撤销应用的辅助功能权限。撤销后，粘贴功能将无法使用，但您仍可查看剪贴板历史记录',
        
        privacy_section11_title: '11. 隐私政策的变更',
        privacy_section11_p1: '我们可能会不时更新本隐私政策。如有重大变更，我们会通过应用内通知或应用更新说明告知您。建议您定期查看本页面以了解任何变更。',
        privacy_section11_p2: '本隐私政策的最后更新日期显示在页面顶部。继续使用本应用即表示您接受更新后的隐私政策。',
        
        privacy_section12_title: '12. 国际用户',
        privacy_section12_p: '由于本应用不收集或传输任何数据，因此不涉及跨境数据传输问题。无论您身在何处，您的数据始终保留在您的设备上。',
        
        privacy_section13_title: '13. 合规声明',
        privacy_section13_p: '本应用的设计和运营遵守以下隐私和数据保护法规：',
        privacy_section13_item1: '<strong>Apple App Store 审核指南：</strong>严格遵守 Apple 的隐私和安全要求',
        privacy_section13_item2: '<strong>GDPR（通用数据保护条例）：</strong>虽然我们不收集数据，但我们的做法符合 GDPR 的隐私保护精神',
        privacy_section13_item3: '<strong>CCPA（加州消费者隐私法案）：</strong>完全符合数据隐私要求',
        
        privacy_section14_title: '14. 联系我们',
        privacy_section14_p1: '如果您对本隐私政策有任何疑问、意见或请求，请通过以下方式联系我们：',
        privacy_section14_email: '<strong>电子邮件：</strong> smilejie2020@foxmail.com',
        privacy_section14_support: '<strong>技术支持：</strong> <a href="support.html">访问技术支持页面</a>',
        privacy_section14_p2: '我们会尽快回复您的查询，通常在 24-48 小时内。',
        
        privacy_section15_title: '15. 隐私政策摘要',
        privacy_section15_intro: '<strong>简而言之，本应用对您的隐私的承诺是：</strong>',
        privacy_section15_item1: '✔ <strong>零数据收集：</strong>我们不收集任何用户数据',
        privacy_section15_item2: '✔ <strong>完全本地：</strong>所有数据仅保存在您的 Mac 上',
        privacy_section15_item3: '✔ <strong>完全离线：</strong>应用不需要网络连接，不与任何服务器通信',
        privacy_section15_item4: '✔ <strong>不共享数据：</strong>不与任何第三方共享数据',
        privacy_section15_item5: '✔ <strong>本地加密：</strong>本地数据经过加密保护',
        privacy_section15_item6: '✔ <strong>您拥有控制权：</strong>您可以随时查看、删除您的数据',
        privacy_section15_item7: '✔ <strong>透明使用权限：</strong>辅助功能权限仅用于粘贴功能，按需申请，不做其他用途',
        privacy_section15_note: '<strong>您的隐私是我们的首要任务。</strong>我们从设计之初就将隐私保护放在第一位，确保您的剪贴板内容永远不会离开您的设备。',
        
        // Changelog page
        page_title_changelog: '更新日志 - Clipboard Safe',
        changelog_title: '更新日志',
        changelog_subtitle: '追踪 Clipboard Safe 的所有更新和改进'
    }
};

// Get current language from URL path
function getCurrentLanguage() {
    const pathname = window.location.pathname;
    // Check if pathname starts with /zh/
    if (pathname.startsWith('/zh/') || pathname === '/zh') {
        return 'zh';
    }
    return 'en';
}

// Change language by redirecting to appropriate path
function setLanguage(lang) {
    let pathname = window.location.pathname;
    let newPath;
    
    // Remove /en/ or /zh/ prefix if it exists
    pathname = pathname.replace(/^\/(en|zh)\//, '/').replace(/^\/(en|zh)$/, '/');
    
    // Ensure pathname starts with /
    if (!pathname.startsWith('/')) {
        pathname = '/' + pathname;
    }
    
    // Build new path based on language
    if (lang === 'zh') {
        newPath = '/zh' + pathname;
    } else {
        newPath = pathname;
    }
    
    // Redirect to new path
    window.location.href = newPath + window.location.search + window.location.hash;
}

// Get translation for a key
function t(key) {
    const lang = getCurrentLanguage();
    return translations[lang][key] || translations['en'][key] || key;
}

// Update all elements with data-i18n attribute
function updatePageLanguage() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = t(key);
        
        if (element.tagName === 'TITLE' || element.tagName === 'META') {
            element.textContent = translation;
        } else {
            element.innerHTML = translation;
        }
    });
    
    // Update html lang attribute
    document.documentElement.lang = getCurrentLanguage() === 'zh' ? 'zh-CN' : 'en';
    
    // Update active language link
    const langLinks = document.querySelectorAll('.lang-link');
    langLinks.forEach(link => {
        link.classList.remove('active');
    });
    const currentLang = getCurrentLanguage();
    const activeLangLink = document.getElementById(`lang-${currentLang}`);
    if (activeLangLink) {
        activeLangLink.classList.add('active');
    }
}

// Initialize i18n on page load
document.addEventListener('DOMContentLoaded', function() {
    // Update language links in existing language-switcher div
    const langSwitcher = document.querySelector('.language-switcher');
    if (langSwitcher) {
        const currentLang = getCurrentLanguage();
        langSwitcher.innerHTML = `
            <div class="language-links">
                <a href="/" id="lang-en" class="lang-link ${currentLang === 'en' ? 'active' : ''}">English</a>
                <span class="lang-separator">|</span>
                <a href="/zh/" id="lang-zh" class="lang-link ${currentLang === 'zh' ? 'active' : ''}">中文</a>
            </div>
        `;
    }
    
    // Set initial language and update page
    updatePageLanguage();
});
