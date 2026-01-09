// Internationalization (i18n) support for Clipboard Safe website
// Default language: English

const translations = {
    en: {
        // Navigation
        nav_home: 'Home',
        nav_support: 'Support',
        nav_privacy: 'Privacy Policy',
        
        // Index page
        page_title_home: 'Clipboard Safe - Intelligent Clipboard Manager',
        hero_title: 'Clipboard Safe',
        hero_subtitle: 'Intelligent Clipboard Manager for Mac',
        hero_description: 'Make your copy-paste workflow more efficient and convenient',
        btn_learn_more: 'Learn More',
        btn_get_support: 'Get Support',
        
        // Features section
        section_features: 'Core Features',
        feature1_title: 'Automatic Clipboard Management',
        feature1_desc1: 'Automatically save all your copied content without extra operations',
        feature1_desc2: 'Review history anytime, never worry about losing copied content',
        
        feature2_title: 'Quick Search',
        feature2_desc1: 'One-click quick access to history',
        feature2_desc2: 'Smart search to quickly find what you need',
        
        feature3_title: 'Multiple Copy Trigger Modes',
        feature3_desc1: 'Support Command+C automatic save',
        feature3_desc2: 'Or use Command+C+C for manual save',
        feature3_desc3: 'Meet different user habits',
        
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
        footer_copyright: '© 2025 Clipboard Safe. All rights reserved.',
        
        // Support page
        page_title_support: 'Technical Support - Clipboard Safe',
        page_header_support: 'Technical Support',
        page_header_support_desc: 'We are here to help you anytime',
        
        support_faq_title: 'Frequently Asked Questions',
        
        faq1_question: '❓ How do I start using Clipboard Safe?',
        faq1_answer: 'After launching the app for the first time, the system will prompt you to grant Accessibility permissions. This is necessary to monitor the clipboard. Please go to System Preferences > Security & Privacy > Privacy > Accessibility and check Clipboard Safe.',
        
        faq2_question: '❓ Why do I need Accessibility permissions?',
        faq2_answer: 'Clipboard Safe requires Accessibility permissions to monitor your copy operations (Command+C+C or Command+C) to automatically save clipboard content. This is a necessary permission for the app core functionality. Rest assured, we do not collect or upload any data; all content is saved only locally on your Mac.',
        
        faq3_question: '❓ How do I switch save modes?',
        faq3_answer: 'In the app settings, you can choose:',
        faq3_mode1: '<strong>Command+C automatic save:</strong> Every copy is automatically saved to history',
        faq3_mode2: '<strong>Command+C+C manual save:</strong> After pressing Command + C to copy, press C one more time to save',
        
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
        faq7_answer: 'Drag the app from the Applications folder to the Trash. All local data will be deleted with the app.',
        
        support_requirements_title: 'System Requirements',
        req_os: '<strong>Operating System:</strong> macOS 14.0 or higher',
        req_arch: '<strong>Architecture:</strong> Supports Intel and Apple Silicon (M1/M2/M3) chips',
        req_permissions: '<strong>Permissions:</strong> Accessibility permissions',
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
        
        trouble2_title: '🔧 Cannot save clipboard content',
        trouble2_solution: '<strong>Solution:</strong>',
        trouble2_step1: 'Check if Accessibility permissions have been granted',
        trouble2_step2: 'Go to System Preferences > Security & Privacy > Privacy > Accessibility',
        trouble2_step3: 'Ensure Clipboard Safe is checked and enabled',
        trouble2_step4: 'If already checked, try unchecking and rechecking',
        
        trouble3_title: '�� Shortcuts not working',
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
        privacy_update_date: 'Last updated: January 9, 2026'
    },
    zh: {
        // Navigation
        nav_home: '首页',
        nav_support: '技术支持',
        nav_privacy: '隐私政策',
        
        // Index page
        page_title_home: 'Clipboard Safe - 智能剪贴板管理工具',
        hero_title: 'Clipboard Safe',
        hero_subtitle: '为 Mac 打造的智能剪贴板管理工具',
        hero_description: '让你的复制粘贴工作流更高效、更便捷',
        btn_learn_more: '了解更多',
        btn_get_support: '获取支持',
        
        // Features section
        section_features: '核心功能',
        feature1_title: '自动剪贴板管理',
        feature1_desc1: '自动保存你所有复制的内容，无需额外操作',
        feature1_desc2: '随时回看历史记录，再也不用担心复制内容丢失',
        
        feature2_title: '快速搜索',
        feature2_desc1: '一键快速访问历史记录',
        feature2_desc2: '智能搜索功能，快速找到你需要的内容',
        
        feature3_title: '多种复制触发方式',
        feature3_desc1: '支持 Command+C 自动保存',
        feature3_desc2: '或使用 Command+C+C 主动保存',
        feature3_desc3: '满足用户的不同使用习惯',
        
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
        footer_copyright: '© 2025 Clipboard Safe. 保留所有权利.',
        
        // Support page
        page_title_support: '技术支持 - Clipboard Safe',
        page_header_support: '技术支持',
        page_header_support_desc: '我们随时为您提供帮助',
        
        support_faq_title: '常见问题',
        
        faq1_question: '❓ 如何开始使用Clipboard Safe？',
        faq1_answer: '首次启动应用后，系统会提示您授予辅助功能权限。这是监控剪贴板所必需的。请前往 系统偏好设置 > 安全性与隐私 > 隐私 > 辅助功能，并勾选Clipboard Safe。',
        
        faq2_question: '❓ 为什么需要辅助功能权限？',
        faq2_answer: 'Clipboard Safe需要辅助功能权限来监控您的复制操作（Command+C+C或Command+C），以便自动保存剪贴板内容。这是应用核心功能所必需的权限。请放心，我们不会收集或上传任何数据，所有内容仅保存在您的 Mac 本地。',
        
        faq3_question: '❓ 如何切换保存模式？',
        faq3_answer: '在应用设置中，您可以选择：',
        faq3_mode1: '<strong>Command+C 自动保存：</strong>每次复制都会自动保存到历史记录',
        faq3_mode2: '<strong>Command+C+C 主动保存：</strong>按 Command + C 复制键后，还需要按一次 C 才会保存',
        
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
        faq7_answer: '将应用从 应用程序 文件夹拖到废纸篓即可。所有本地数据会随应用一起删除。',
        
        support_requirements_title: '系统要求',
        req_os: '<strong>操作系统：</strong>macOS 14.0 或更高版本',
        req_arch: '<strong>架构支持：</strong>支持 Intel 和 Apple Silicon (M1/M2/M3) 芯片',
        req_permissions: '<strong>权限要求：</strong>辅助功能权限',
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
        
        trouble2_title: '🔧 无法保存剪贴板内容',
        trouble2_solution: '<strong>解决方案：</strong>',
        trouble2_step1: '检查是否已授予辅助功能权限',
        trouble2_step2: '前往 系统偏好设置 > 安全性与隐私 > 隐私 > 辅助功能',
        trouble2_step3: '确保Clipboard Safe已勾选并启用',
        trouble2_step4: '如已勾选，尝试取消勾选后重新勾选',
        
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
        privacy_update_date: '最后更新日期：2026年1月9日'
    }
};

// Get current language from localStorage or default to English
function getCurrentLanguage() {
    return localStorage.getItem('language') || 'en';
}

// Set language in localStorage
function setLanguage(lang) {
    localStorage.setItem('language', lang);
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
    
    // Update language selector
    const languageSelect = document.getElementById('language-select');
    if (languageSelect) {
        languageSelect.value = getCurrentLanguage();
    }
}

// Initialize i18n on page load
document.addEventListener('DOMContentLoaded', function() {
    // Create language selector if it doesn't exist
    const navbar = document.querySelector('.navbar .container');
    if (navbar && !document.getElementById('language-select')) {
        const langSwitcher = document.createElement('div');
        langSwitcher.className = 'language-switcher';
        langSwitcher.innerHTML = `
            <select id="language-select" class="language-select">
                <option value="en">English</option>
                <option value="zh">中文</option>
            </select>
        `;
        navbar.appendChild(langSwitcher);
        
        // Add event listener for language change
        const languageSelect = document.getElementById('language-select');
        languageSelect.addEventListener('change', function() {
            setLanguage(this.value);
            updatePageLanguage();
        });
    }
    
    // Set initial language and update page
    updatePageLanguage();
});
