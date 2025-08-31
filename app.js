// BRAINBYTE ERP - Complete Frontend Application
// Created with love for beautiful, functional business management

// ========================================
// GLOBAL STATE AND CONFIGURATION
// ========================================

const AppState = {
    currentUser: null,
    currentLanguage: 'ar',
    currentTheme: 'light',
    currentView: 'login',
    isAuthenticated: false,
    sidebarMini: false,
    notifications: [],
    
    // Dummy data structures
    users: [],
    products: [],
    categories: [],
    warehouses: [],
    customers: [],
    suppliers: [],
    employees: [],
    invoices: [],
    transferRequests: [],
    expenses: [],
    settings: {}
};

// Multi-language support
const i18n = {
    ar: {
        // Login
        loginSubtitle: 'نظام إدارة الأعمال المتكامل',
        username: 'اسم المستخدم',
        password: 'كلمة المرور',
        language: 'اللغة',
        login: 'تسجيل الدخول',
        demoCredentials: 'بيانات تجريبية:',
        
        // Navigation
        dashboard: 'لوحة التحكم',
        products: 'المنتجات',
        warehouses: 'المخازن',
        sales: 'المبيعات',
        returns: 'المرتجعات',
        requests: 'الطلبات',
        customers: 'العملاء',
        suppliers: 'الموردون',
        hr: 'الموارد البشرية',
        expenses: 'المصروفات',
        reports: 'التقارير',
        settings: 'الإعدادات',
        profile: 'الملف الشخصي',
        logout: 'تسجيل الخروج',
        
        // Dashboard
        todaySales: 'مبيعات اليوم',
        todayInvoices: 'فواتير اليوم',
        inventoryValue: 'قيمة المخزون',
        lowStock: 'مخزون منخفض',
        salesTrend: 'اتجاه المبيعات',
        topProducts: 'أكثر المنتجات مبيعاً',
        recentActivity: 'النشاط الأخير',
        exportDashboard: 'تصدير اللوحة',
        last7Days: 'آخر 7 أيام',
        last30Days: 'آخر 30 يوم',
        last90Days: 'آخر 90 يوم',
        
        // Products
        addProduct: 'إضافة منتج',
        image: 'الصورة',
        name: 'الاسم',
        code: 'الكود',
        barcode: 'الباركود',
        category: 'الفئة',
        stock: 'المخزون',
        price: 'السعر',
        actions: 'الإجراءات',
        allCategories: 'جميع الفئات',
        allStock: 'جميع المنتجات',
        lowStockOnly: 'مخزون منخفض فقط',
        outOfStock: 'نفد المخزون',
        clearFilters: 'إعادة تعيين',
        
        // Sales
        newInvoice: 'فاتورة جديدة',
        createInvoice: 'إنشاء فاتورة',
        customer: 'العميل',
        date: 'التاريخ',
        warehouse: 'المخزن',
        product: 'المنتج',
        quantity: 'الكمية',
        discount: 'الخصم',
        total: 'المجموع',
        notes: 'ملاحظات',
        subtotal: 'المجموع الفرعي',
        saveInvoice: 'حفظ الفاتورة',
        printInvoice: 'طباعة',
        invoiceNumber: 'رقم الفاتورة',
        status: 'الحالة',
        salesHistory: 'سجل المبيعات',
        selectCustomer: 'اختر العميل',
        selectWarehouse: 'اختر المخزن',
        
        // Warehouses
        addWarehouse: 'إضافة مخزن',
        transfer: 'تحويل',
        transferRequests: 'طلبات التحويل',
        requestId: 'رقم الطلب',
        from: 'من',
        to: 'إلى',
        items: 'الأصناف',
        
        // HR
        addEmployee: 'إضافة موظف',
        employees: 'الموظفون',
        attendance: 'الحضور والغياب',
        payroll: 'الرواتب',
        position: 'المنصب',
        department: 'القسم',
        salary: 'الراتب الأساسي',
        hireDate: 'تاريخ التوظيف',
        attendanceRecord: 'سجل الحضور',
        workingDays: 'أيام العمل',
        presentDays: 'أيام الحضور',
        absentDays: 'أيام الغياب',
        payrollSheet: 'كشف الرواتب',
        baseSalary: 'الراتب الأساسي',
        allowances: 'البدلات',
        deductions: 'الخصومات',
        netSalary: 'صافي الراتب',
        generate: 'إنشاء',
        
        // Reports
        exportReport: 'تصدير التقرير',
        reportType: 'نوع التقرير',
        salesReport: 'تقرير المبيعات',
        inventoryReport: 'تقرير المخزون',
        financialReport: 'التقرير المالي',
        employeeReport: 'تقرير الموظفين',
        fromDate: 'من تاريخ',
        toDate: 'إلى تاريخ',
        generateReport: 'إنشاء التقرير',
        selectReportToGenerate: 'اختر نوع التقرير وانقر إنشاء',
        
        // Settings
        companySettings: 'إعدادات الشركة',
        companyName: 'اسم الشركة',
        phone: 'الهاتف',
        email: 'البريد الإلكتروني',
        address: 'العنوان',
        currency: 'العملة',
        saveSettings: 'حفظ الإعدادات',
        invoiceSettings: 'إعدادات الفواتير',
        invoiceTemplate: 'قالب الفاتورة',
        invoiceFooter: 'تذييل الفاتورة',
        systemSettings: 'إعدادات النظام',
        defaultLanguage: 'اللغة الافتراضية',
        dateFormat: 'تنسيق التاريخ',
        enableBarcode: 'تمكين الباركود',
        enableNotifications: 'تمكين الإشعارات',
        dataManagement: 'إدارة البيانات',
        exportData: 'تصدير البيانات',
        importData: 'استيراد البيانات',
        resetData: 'إعادة تعيين البيانات',
        
        // Profile
        accountInfo: 'معلومات الحساب',
        changePhoto: 'تغيير الصورة',
        role: 'الدور',
        lastLogin: 'آخر دخول',
        preferredLanguage: 'اللغة المفضلة',
        updateProfile: 'تحديث الملف',
        
        // Common
        save: 'حفظ',
        cancel: 'إلغاء',
        confirm: 'تأكيد',
        confirmation: 'تأكيد',
        notifications: 'الإشعارات',
        noNotifications: 'لا توجد إشعارات جديدة',
        edit: 'تعديل',
        delete: 'حذف',
        view: 'عرض',
        add: 'إضافة',
        search: 'بحث',
        filter: 'فلترة',
        export: 'تصدير',
        import: 'استيراد',
        print: 'طباعة',
        keyboardShortcuts: 'اختصارات لوحة المفاتيح',
        globalSearch: 'البحث الشامل',
        showShortcuts: 'عرض الاختصارات',
        
        // Placeholders
        'بحث شامل...': 'بحث شامل...',
        'بحث في المنتجات...': 'بحث في المنتجات...',
        'بحث أو مسح الباركود...': 'بحث أو مسح الباركود...',
        
        // Status descriptions
        returnsDescription: 'إدارة مرتجعات المبيعات والمشتريات',
        customersDescription: 'إدارة بيانات العملاء وسجل المعاملات',
        suppliersDescription: 'إدارة بيانات الموردين وسجل المشتريات',
        expensesDescription: 'تسجيل ومتابعة مصروفات الشركة'
    },
    en: {
        // Login
        loginSubtitle: 'Integrated Business Management System',
        username: 'Username',
        password: 'Password',
        language: 'Language',
        login: 'Login',
        demoCredentials: 'Demo Credentials:',
        
        // Navigation
        dashboard: 'Dashboard',
        products: 'Products',
        warehouses: 'Warehouses',
        sales: 'Sales',
        returns: 'Returns',
        requests: 'Requests',
        customers: 'Customers',
        suppliers: 'Suppliers',
        hr: 'Human Resources',
        expenses: 'Expenses',
        reports: 'Reports',
        settings: 'Settings',
        profile: 'Profile',
        logout: 'Logout',
        
        // Dashboard
        todaySales: "Today's Sales",
        todayInvoices: "Today's Invoices",
        inventoryValue: 'Inventory Value',
        lowStock: 'Low Stock',
        salesTrend: 'Sales Trend',
        topProducts: 'Top Products',
        recentActivity: 'Recent Activity',
        exportDashboard: 'Export Dashboard',
        last7Days: 'Last 7 Days',
        last30Days: 'Last 30 Days',
        last90Days: 'Last 90 Days',
        
        // Products
        addProduct: 'Add Product',
        image: 'Image',
        name: 'Name',
        code: 'Code',
        barcode: 'Barcode',
        category: 'Category',
        stock: 'Stock',
        price: 'Price',
        actions: 'Actions',
        allCategories: 'All Categories',
        allStock: 'All Products',
        lowStockOnly: 'Low Stock Only',
        outOfStock: 'Out of Stock',
        clearFilters: 'Clear Filters',
        
        // Sales
        newInvoice: 'New Invoice',
        createInvoice: 'Create Invoice',
        customer: 'Customer',
        date: 'Date',
        warehouse: 'Warehouse',
        product: 'Product',
        quantity: 'Quantity',
        discount: 'Discount',
        total: 'Total',
        notes: 'Notes',
        subtotal: 'Subtotal',
        saveInvoice: 'Save Invoice',
        printInvoice: 'Print',
        invoiceNumber: 'Invoice Number',
        status: 'Status',
        salesHistory: 'Sales History',
        selectCustomer: 'Select Customer',
        selectWarehouse: 'Select Warehouse',
        
        // Warehouses
        addWarehouse: 'Add Warehouse',
        transfer: 'Transfer',
        transferRequests: 'Transfer Requests',
        requestId: 'Request ID',
        from: 'From',
        to: 'To',
        items: 'Items',
        
        // HR
        addEmployee: 'Add Employee',
        employees: 'Employees',
        attendance: 'Attendance',
        payroll: 'Payroll',
        position: 'Position',
        department: 'Department',
        salary: 'Base Salary',
        hireDate: 'Hire Date',
        attendanceRecord: 'Attendance Record',
        workingDays: 'Working Days',
        presentDays: 'Present Days',
        absentDays: 'Absent Days',
        payrollSheet: 'Payroll Sheet',
        baseSalary: 'Base Salary',
        allowances: 'Allowances',
        deductions: 'Deductions',
        netSalary: 'Net Salary',
        generate: 'Generate',
        
        // Reports
        exportReport: 'Export Report',
        reportType: 'Report Type',
        salesReport: 'Sales Report',
        inventoryReport: 'Inventory Report',
        financialReport: 'Financial Report',
        employeeReport: 'Employee Report',
        fromDate: 'From Date',
        toDate: 'To Date',
        generateReport: 'Generate Report',
        selectReportToGenerate: 'Select report type and click generate',
        
        // Settings
        companySettings: 'Company Settings',
        companyName: 'Company Name',
        phone: 'Phone',
        email: 'Email',
        address: 'Address',
        currency: 'Currency',
        saveSettings: 'Save Settings',
        invoiceSettings: 'Invoice Settings',
        invoiceTemplate: 'Invoice Template',
        invoiceFooter: 'Invoice Footer',
        systemSettings: 'System Settings',
        defaultLanguage: 'Default Language',
        dateFormat: 'Date Format',
        enableBarcode: 'Enable Barcode',
        enableNotifications: 'Enable Notifications',
        dataManagement: 'Data Management',
        exportData: 'Export Data',
        importData: 'Import Data',
        resetData: 'Reset Data',
        
        // Profile
        accountInfo: 'Account Information',
        changePhoto: 'Change Photo',
        role: 'Role',
        lastLogin: 'Last Login',
        preferredLanguage: 'Preferred Language',
        updateProfile: 'Update Profile',
        
        // Common
        save: 'Save',
        cancel: 'Cancel',
        confirm: 'Confirm',
        confirmation: 'Confirmation',
        notifications: 'Notifications',
        noNotifications: 'No new notifications',
        edit: 'Edit',
        delete: 'Delete',
        view: 'View',
        add: 'Add',
        search: 'Search',
        filter: 'Filter',
        export: 'Export',
        import: 'Import',
        print: 'Print',
        keyboardShortcuts: 'Keyboard Shortcuts',
        globalSearch: 'Global Search',
        showShortcuts: 'Show Shortcuts',
        
        // Placeholders (keeping Arabic keys for consistency)
        'بحث شامل...': 'Global search...',
        'بحث في المنتجات...': 'Search products...',
        'بحث أو مسح الباركود...': 'Search or scan barcode...',
        
        // Status descriptions
        returnsDescription: 'Manage sales and purchase returns',
        customersDescription: 'Manage customer data and transaction history',
        suppliersDescription: 'Manage supplier data and purchase history',
        expensesDescription: 'Record and track company expenses'
    }
};

// User roles and permissions
const UserRoles = {
    ADMIN: 'admin',
    INVENTORY_MANAGER: 'inventory_manager',
    SALESPERSON: 'salesperson',
    ACCOUNTANT: 'accountant',
    VIEWER: 'viewer',
    WAREHOUSE_SUB_USER: 'warehouse_sub_user'
};

const Permissions = {
    [UserRoles.ADMIN]: ['*'],
    [UserRoles.INVENTORY_MANAGER]: ['products', 'warehouses', 'inventory'],
    [UserRoles.SALESPERSON]: ['sales', 'customers', 'returns'],
    [UserRoles.ACCOUNTANT]: ['reports', 'expenses', 'financial'],
    [UserRoles.VIEWER]: ['dashboard', 'reports:read'],
    [UserRoles.WAREHOUSE_SUB_USER]: ['sales', 'returns', 'requests:create']
};

// ========================================
// UTILITY FUNCTIONS
// ========================================

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function formatCurrency(amount, currency = 'EGP') {
    const symbols = { EGP: 'جنيه', USD: '$', EUR: '€' };
    return `${amount.toFixed(2)} ${symbols[currency] || currency}`;
}

function formatDate(date, format = 'DD/MM/YYYY') {
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();
    
    switch (format) {
        case 'MM/DD/YYYY': return `${month}/${day}/${year}`;
        case 'YYYY-MM-DD': return `${year}-${month}-${day}`;
        default: return `${day}/${month}/${year}`;
    }
}

function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

function hasPermission(permission) {
    if (!AppState.currentUser) return false;
    const userPermissions = Permissions[AppState.currentUser.role] || [];
    return userPermissions.includes('*') || userPermissions.includes(permission);
}

// ========================================
// STORAGE MANAGEMENT
// ========================================

class Storage {
    static save(key, data) {
        try {
            localStorage.setItem(key, JSON.stringify(data));
            return true;
        } catch (error) {
            console.error('Storage save error:', error);
            return false;
        }
    }
    
    static load(key, defaultValue = null) {
        try {
            const data = localStorage.getItem(key);
            return data ? JSON.parse(data) : defaultValue;
        } catch (error) {
            console.error('Storage load error:', error);
            return defaultValue;
        }
    }
    
    static remove(key) {
        localStorage.removeItem(key);
    }
    
    static clear() {
        localStorage.clear();
    }
}

// ========================================
// INTERNATIONALIZATION
// ========================================

class I18n {
    static init() {
        const savedLang = Storage.load('language', 'ar');
        this.setLanguage(savedLang);
    }
    
    static setLanguage(lang) {
        AppState.currentLanguage = lang;
        Storage.save('language', lang);
        
        // Update HTML attributes
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        
        // Update all translatable elements
        this.updateTranslations();
        
        // Update placeholders
        this.updatePlaceholders();
    }
    
    static updateTranslations() {
        const elements = document.querySelectorAll('[data-lang]');
        elements.forEach(element => {
            const key = element.getAttribute('data-lang');
            const translation = i18n[AppState.currentLanguage][key];
            if (translation) {
                element.textContent = translation;
            }
        });
    }
    
    static updatePlaceholders() {
        const elements = document.querySelectorAll('[data-lang-placeholder]');
        elements.forEach(element => {
            const key = element.getAttribute('data-lang-placeholder');
            const translation = i18n[AppState.currentLanguage][key];
            if (translation) {
                element.placeholder = translation;
            }
        });
    }
    
    static t(key) {
        return i18n[AppState.currentLanguage][key] || key;
    }
}

// ========================================
// THEME MANAGEMENT
// ========================================

class ThemeManager {
    static init() {
        const savedTheme = Storage.load('theme', 'light');
        this.setTheme(savedTheme);
    }
    
    static setTheme(theme) {
        AppState.currentTheme = theme;
        Storage.save('theme', theme);
        document.documentElement.setAttribute('data-theme', theme);
        
        // Update theme toggle icon
        const themeIcon = document.querySelector('#themeToggle i');
        if (themeIcon) {
            themeIcon.className = theme === 'dark' ? 'bi bi-sun fs-5' : 'bi bi-moon fs-5';
        }
    }
    
    static toggle() {
        const newTheme = AppState.currentTheme === 'light' ? 'dark' : 'light';
        this.setTheme(newTheme);
    }
}

// ========================================
// NOTIFICATION SYSTEM
// ========================================

class NotificationManager {
    static addNotification(message, type = 'info', persistent = false) {
        const notification = {
            id: generateId(),
            message,
            type,
            timestamp: new Date(),
            read: false,
            persistent
        };
        
        AppState.notifications.unshift(notification);
        this.updateNotificationBell();
        this.showToast(message, type);
        
        if (!persistent) {
            setTimeout(() => {
                this.removeNotification(notification.id);
            }, 5000);
        }
    }
    
    static removeNotification(id) {
        AppState.notifications = AppState.notifications.filter(n => n.id !== id);
        this.updateNotificationBell();
    }
    
    static updateNotificationBell() {
        const unreadCount = AppState.notifications.filter(n => !n.read).length;
        const bellCount = document.querySelector('.notification-count');
        if (bellCount) {
            bellCount.textContent = unreadCount;
            bellCount.style.display = unreadCount > 0 ? 'block' : 'none';
        }
    }
    
    static showToast(message, type = 'info') {
        const toastContainer = document.getElementById('toastContainer');
        const toast = document.createElement('div');
        toast.className = `toast show toast-${type}`;
        toast.innerHTML = `
            <div class="toast-body">
                <i class="bi bi-${this.getToastIcon(type)} me-2"></i>
                ${message}
            </div>
        `;
        
        toastContainer.appendChild(toast);
        
        setTimeout(() => {
            toast.remove();
        }, 3000);
    }
    
    static getToastIcon(type) {
        switch (type) {
            case 'success': return 'check-circle';
            case 'error': return 'x-circle';
            case 'warning': return 'exclamation-triangle';
            default: return 'info-circle';
        }
    }
}

// ========================================
// AUTHENTICATION
// ========================================

class AuthManager {
    static init() {
        // Check for existing session
        const savedUser = Storage.load('currentUser');
        if (savedUser) {
            AppState.currentUser = savedUser;
            AppState.isAuthenticated = true;
            this.showMainApp();
        } else {
            this.showLogin();
        }
    }
    
    static login(username, password) {
        // Demo login logic
        const user = this.validateCredentials(username, password);
        if (user) {
            AppState.currentUser = user;
            AppState.isAuthenticated = true;
            user.lastLogin = new Date().toISOString();
            Storage.save('currentUser', user);
            
            // Log login attempt
            this.logLoginAttempt(username, true);
            
            this.showMainApp();
            NotificationManager.addNotification(I18n.t('loginSuccessful') || 'تم تسجيل الدخول بنجاح', 'success');
            return true;
        } else {
            this.logLoginAttempt(username, false);
            NotificationManager.addNotification('بيانات دخول غير صحيحة', 'error');
            return false;
        }
    }
    
    static validateCredentials(username, password) {
        // Default admin account
        if (username === 'Hesham' && password === '1902') {
            return {
                id: 'admin',
                username: 'Hesham',
                role: UserRoles.ADMIN,
                name: 'Hesham',
                avatar: 'https://via.placeholder.com/120'
            };
        }
        
        // Sub-user accounts (from warehouses)
        const subUsers = AppState.warehouses.filter(w => w.subUser && w.subUser.username === username);
        if (subUsers.length > 0 && subUsers[0].subUser.password === password) {
            return {
                id: subUsers[0].id,
                username: username,
                role: UserRoles.WAREHOUSE_SUB_USER,
                name: username,
                warehouseId: subUsers[0].id,
                avatar: 'https://via.placeholder.com/120'
            };
        }
        
        return null;
    }
    
    static logout() {
        AppState.currentUser = null;
        AppState.isAuthenticated = false;
        Storage.remove('currentUser');
        this.showLogin();
        NotificationManager.addNotification('تم تسجيل الخروج بنجاح', 'info');
    }
    
    static showLogin() {
        document.getElementById('view-login').classList.remove('d-none');
        document.getElementById('mainApp').classList.add('d-none');
    }
    
    static showMainApp() {
        document.getElementById('view-login').classList.add('d-none');
        document.getElementById('mainApp').classList.remove('d-none');
        
        // Update user info in header
        document.getElementById('currentUserName').textContent = AppState.currentUser.name;
        
        // Show appropriate dashboard based on role
        if (AppState.currentUser.role === UserRoles.WAREHOUSE_SUB_USER) {
            showView('sales'); // Sub-users go directly to sales
        } else {
            showView('dashboard');
        }
        
        // Apply ACL
        this.applyACL();
    }
    
    static applyACL() {
        // Hide/show sidebar items based on permissions
        const sidebarItems = document.querySelectorAll('.sidebar .nav-link');
        sidebarItems.forEach(item => {
            const view = item.getAttribute('onclick')?.match(/showView\('(.+)'\)/)?.[1];
            if (view && !hasPermission(view)) {
                item.style.display = 'none';
            }
        });
    }
    
    static logLoginAttempt(username, success) {
        const attempt = {
            username,
            success,
            timestamp: new Date().toISOString(),
            userAgent: navigator.userAgent
        };
        
        const loginLog = Storage.load('loginLog', []);
        loginLog.unshift(attempt);
        
        // Keep only last 100 attempts
        if (loginLog.length > 100) {
            loginLog.splice(100);
        }
        
        Storage.save('loginLog', loginLog);
    }
}

// ========================================
// ROUTING SYSTEM
// ========================================

function showView(viewName) {
    // Check permissions
    if (!hasPermission(viewName) && viewName !== 'profile') {
        NotificationManager.addNotification('ليس لديك صلاحية للوصول لهذه الصفحة', 'warning');
        return;
    }
    
    // Hide all views
    const views = document.querySelectorAll('.view-container');
    views.forEach(view => view.classList.add('d-none'));
    
    // Show target view
    const targetView = document.getElementById(`view-${viewName}`);
    if (targetView) {
        targetView.classList.remove('d-none');
        AppState.currentView = viewName;
        
        // Update active nav link
        document.querySelectorAll('.sidebar .nav-link').forEach(link => {
            link.classList.remove('active');
        });
        
        const activeLink = document.querySelector(`[onclick="showView('${viewName}')"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
        
        // Load view-specific data
        this.loadViewData(viewName);
    }
}

function loadViewData(viewName) {
    switch (viewName) {
        case 'dashboard':
            DashboardModule.init();
            break;
        case 'products':
            ProductsModule.init();
            break;
        case 'sales':
            SalesModule.init();
            break;
        case 'warehouses':
            WarehousesModule.init();
            break;
        case 'hr':
            HRModule.init();
            break;
        case 'reports':
            ReportsModule.init();
            break;
        case 'profile':
            ProfileModule.init();
            break;
        case 'requests':
            RequestsModule.init();
            break;
    }
}

// ========================================
// DASHBOARD MODULE
// ========================================

const DashboardModule = {
    charts: {},
    
    init() {
        this.updateKPIs();
        this.initCharts();
        this.loadRecentActivity();
        this.initDragDrop();
    },
    
    updateKPIs() {
        // Calculate KPIs from dummy data
        const today = new Date().toDateString();
        const todayInvoices = AppState.invoices.filter(inv => 
            new Date(inv.date).toDateString() === today
        );
        
        const todaySales = todayInvoices.reduce((sum, inv) => sum + inv.total, 0);
        const inventoryValue = AppState.products.reduce((sum, product) => 
            sum + (product.stock * product.purchasePrice), 0
        );
        const lowStockItems = AppState.products.filter(p => p.stock <= p.minStock).length;
        
        // Update DOM
        document.getElementById('todaySalesAmount').textContent = formatCurrency(todaySales);
        document.getElementById('todayInvoicesCount').textContent = todayInvoices.length;
        document.getElementById('inventoryValue').textContent = formatCurrency(inventoryValue);
        document.getElementById('lowStockCount').textContent = lowStockItems;
    },
    
    initCharts() {
        // Sales trend chart
        const salesCtx = document.getElementById('salesChart').getContext('2d');
        this.charts.sales = new Chart(salesCtx, {
            type: 'line',
            data: {
                labels: this.generateDateLabels(7),
                datasets: [{
                    label: I18n.t('sales'),
                    data: this.generateSalesData(7),
                    borderColor: 'rgb(0, 255, 255)',
                    backgroundColor: 'rgba(0, 255, 255, 0.1)',
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(0, 255, 255, 0.1)'
                        }
                    },
                    x: {
                        grid: {
                            color: 'rgba(0, 255, 255, 0.1)'
                        }
                    }
                }
            }
        });
        
        // Top products chart
        const topProductsCtx = document.getElementById('topProductsChart').getContext('2d');
        this.charts.topProducts = new Chart(topProductsCtx, {
            type: 'doughnut',
            data: {
                labels: AppState.products.slice(0, 5).map(p => p.name),
                datasets: [{
                    data: AppState.products.slice(0, 5).map(p => p.soldQuantity || Math.floor(Math.random() * 100)),
                    backgroundColor: [
                        'rgba(0, 255, 255, 0.8)',
                        'rgba(139, 92, 246, 0.8)',
                        'rgba(16, 185, 129, 0.8)',
                        'rgba(249, 115, 22, 0.8)',
                        'rgba(236, 72, 153, 0.8)'
                    ]
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        });
    },
    
    generateDateLabels(days) {
        const labels = [];
        for (let i = days - 1; i >= 0; i--) {
            const date = new Date();
            date.setDate(date.getDate() - i);
            labels.push(date.toLocaleDateString('ar-SA', { month: 'short', day: 'numeric' }));
        }
        return labels;
    },
    
    generateSalesData(days) {
        const data = [];
        for (let i = 0; i < days; i++) {
            data.push(Math.floor(Math.random() * 10000) + 1000);
        }
        return data;
    },
    
    loadRecentActivity() {
        const activities = [
            { type: 'sale', message: 'تم إنشاء فاتورة مبيعات #INV-001', time: '5 دقائق' },
            { type: 'product', message: 'تم إضافة منتج جديد: لابتوب HP', time: '15 دقيقة' },
            { type: 'transfer', message: 'طلب تحويل مخزني جديد', time: '30 دقيقة' },
            { type: 'employee', message: 'تم تسجيل حضور الموظف أحمد', time: 'ساعة واحدة' }
        ];
        
        const container = document.getElementById('recentActivityList');
        container.innerHTML = activities.map(activity => `
            <div class="d-flex align-items-center mb-3">
                <div class="activity-icon me-3">
                    <i class="bi bi-${this.getActivityIcon(activity.type)}"></i>
                </div>
                <div class="flex-grow-1">
                    <div class="fw-semibold">${activity.message}</div>
                    <small class="text-muted">${activity.time}</small>
                </div>
            </div>
        `).join('');
    },
    
    getActivityIcon(type) {
        const icons = {
            sale: 'cart-check',
            product: 'box',
            transfer: 'arrow-left-right',
            employee: 'person-badge'
        };
        return icons[type] || 'info-circle';
    },
    
    initDragDrop() {
        const widgetsContainer = document.getElementById('kpiWidgets');
        if (widgetsContainer && window.Sortable) {
            new Sortable(widgetsContainer, {
                animation: 150,
                ghostClass: 'widget-item-ghost',
                onEnd: () => {
                    this.saveDashboardLayout();
                }
            });
        }
    },
    
    saveDashboardLayout() {
        const widgets = Array.from(document.querySelectorAll('.widget-item'));
        const layout = widgets.map(widget => widget.getAttribute('data-widget'));
        Storage.save('dashboardLayout', layout);
    }
};

// ========================================
// PRODUCTS MODULE
// ========================================

const ProductsModule = {
    currentProduct: null,
    
    init() {
        this.loadProducts();
        this.loadCategories();
        this.initEventListeners();
    },
    
    loadProducts() {
        const tableBody = document.getElementById('productsTableBody');
        if (!tableBody) return;
        
        const filteredProducts = this.getFilteredProducts();
        tableBody.innerHTML = filteredProducts.map(product => `
            <tr>
                <td>
                    <img src="${product.image}" alt="${product.name}" width="50" height="50" class="rounded">
                </td>
                <td>${product.name}</td>
                <td>${product.code}</td>
                <td>
                    <canvas id="barcode-${product.id}" class="barcode-mini"></canvas>
                </td>
                <td>
                    <span class="badge bg-secondary">${product.category}</span>
                </td>
                <td>
                    <span class="badge ${this.getStockClass(product)}">${product.stock}</span>
                </td>
                <td>${formatCurrency(product.salePrice)}</td>
                <td>
                    <button class="btn btn-sm btn-outline-neon me-1" onclick="ProductsModule.editProduct('${product.id}')">
                        <i class="bi bi-pencil"></i>
                    </button>
                    <button class="btn btn-sm btn-outline-danger" onclick="ProductsModule.deleteProduct('${product.id}')">
                        <i class="bi bi-trash"></i>
                    </button>
                </td>
            </tr>
        `).join('');
        
        // Generate barcodes for visible products
        setTimeout(() => {
            filteredProducts.forEach(product => {
                const canvas = document.getElementById(`barcode-${product.id}`);
                if (canvas && window.JsBarcode) {
                    JsBarcode(canvas, product.barcode, {
                        format: "CODE128",
                        width: 1,
                        height: 30,
                        displayValue: false
                    });
                }
            });
        }, 100);
    },
    
    getFilteredProducts() {
        let filtered = [...AppState.products];
        
        const searchTerm = document.getElementById('productSearch')?.value.toLowerCase() || '';
        const categoryFilter = document.getElementById('categoryFilter')?.value || '';
        const stockFilter = document.getElementById('stockFilter')?.value || '';
        
        if (searchTerm) {
            filtered = filtered.filter(p => 
                p.name.toLowerCase().includes(searchTerm) ||
                p.code.toLowerCase().includes(searchTerm) ||
                p.barcode.includes(searchTerm)
            );
        }
        
        if (categoryFilter) {
            filtered = filtered.filter(p => p.category === categoryFilter);
        }
        
        if (stockFilter === 'low') {
            filtered = filtered.filter(p => p.stock <= p.minStock);
        } else if (stockFilter === 'out') {
            filtered = filtered.filter(p => p.stock === 0);
        }
        
        return filtered;
    },
    
    getStockClass(product) {
        if (product.stock === 0) return 'bg-danger';
        if (product.stock <= product.minStock) return 'bg-warning';
        return 'bg-success';
    },
    
    loadCategories() {
        const categorySelect = document.getElementById('categoryFilter');
        if (categorySelect) {
            categorySelect.innerHTML = '<option value="">' + I18n.t('allCategories') + '</option>' +
                AppState.categories.map(cat => `<option value="${cat}">${cat}</option>`).join('');
        }
    },
    
    initEventListeners() {
        // Search and filter listeners
        const searchInput = document.getElementById('productSearch');
        if (searchInput) {
            searchInput.addEventListener('input', debounce(() => this.loadProducts(), 300));
        }
        
        const categoryFilter = document.getElementById('categoryFilter');
        if (categoryFilter) {
            categoryFilter.addEventListener('change', () => this.loadProducts());
        }
        
        const stockFilter = document.getElementById('stockFilter');
        if (stockFilter) {
            stockFilter.addEventListener('change', () => this.loadProducts());
        }
    },
    
    editProduct(id) {
        const product = AppState.products.find(p => p.id === id);
        if (product) {
            this.showProductForm(product);
        }
    },
    
    deleteProduct(id) {
        showConfirmModal(
            'هل أنت متأكد من حذف هذا المنتج؟',
            () => {
                AppState.products = AppState.products.filter(p => p.id !== id);
                Storage.save('products', AppState.products);
                this.loadProducts();
                NotificationManager.addNotification('تم حذف المنتج بنجاح', 'success');
            }
        );
    }
};

// ========================================
// SALES MODULE
// ========================================

const SalesModule = {
    currentInvoice: null,
    
    init() {
        this.loadSalesHistory();
        this.initInvoiceForm();
    },
    
    loadSalesHistory() {
        const tableBody = document.getElementById('salesHistoryTableBody');
        if (!tableBody) return;
        
        tableBody.innerHTML = AppState.invoices.map(invoice => `
            <tr>
                <td>${invoice.number}</td>
                <td>${formatDate(invoice.date)}</td>
                <td>${invoice.customerName}</td>
                <td>${formatCurrency(invoice.total)}</td>
                <td>
                    <span class="status-badge status-${invoice.status}">${invoice.status}</span>
                </td>
                <td>
                    <button class="btn btn-sm btn-outline-neon me-1" onclick="SalesModule.viewInvoice('${invoice.id}')">
                        <i class="bi bi-eye"></i>
                    </button>
                    <button class="btn btn-sm btn-outline-secondary" onclick="SalesModule.printInvoice('${invoice.id}')">
                        <i class="bi bi-printer"></i>
                    </button>
                </td>
            </tr>
        `).join('');
    },
    
    initInvoiceForm() {
        // Load customers and warehouses in selects
        this.loadCustomers();
        this.loadWarehouses();
        
        // Set default date
        const dateInput = document.getElementById('invoiceDate');
        if (dateInput) {
            dateInput.value = new Date().toISOString().split('T')[0];
        }
        
        // Initialize product search
        this.initProductSearch();
    },
    
    loadCustomers() {
        const select = document.getElementById('invoiceCustomer');
        if (select) {
            select.innerHTML = '<option value="">' + I18n.t('selectCustomer') + '</option>' +
                AppState.customers.map(customer => 
                    `<option value="${customer.id}">${customer.name}</option>`
                ).join('');
        }
    },
    
    loadWarehouses() {
        const select = document.getElementById('invoiceWarehouse');
        if (select) {
            const availableWarehouses = AppState.currentUser.role === UserRoles.WAREHOUSE_SUB_USER 
                ? AppState.warehouses.filter(w => w.id === AppState.currentUser.warehouseId)
                : AppState.warehouses;
                
            select.innerHTML = '<option value="">' + I18n.t('selectWarehouse') + '</option>' +
                availableWarehouses.map(warehouse => 
                    `<option value="${warehouse.id}">${warehouse.name}</option>`
                ).join('');
        }
    },
    
    initProductSearch() {
        const searchInput = document.getElementById('productSearch');
        const suggestions = document.getElementById('productSuggestions');
        
        if (searchInput && suggestions) {
            searchInput.addEventListener('input', debounce((e) => {
                const term = e.target.value.toLowerCase();
                if (term.length < 2) {
                    suggestions.style.display = 'none';
                    return;
                }
                
                const matches = AppState.products.filter(p => 
                    p.name.toLowerCase().includes(term) ||
                    p.code.toLowerCase().includes(term) ||
                    p.barcode.includes(term)
                ).slice(0, 5);
                
                if (matches.length > 0) {
                    suggestions.innerHTML = matches.map(product => `
                        <div class="suggestion-item" onclick="SalesModule.selectProduct('${product.id}')">
                            <div class="d-flex">
                                <img src="${product.image}" width="40" height="40" class="rounded me-2">
                                <div>
                                    <div class="fw-semibold">${product.name}</div>
                                    <small class="text-muted">${product.code} - ${formatCurrency(product.salePrice)}</small>
                                </div>
                            </div>
                        </div>
                    `).join('');
                    suggestions.style.display = 'block';
                } else {
                    suggestions.style.display = 'none';
                }
            }, 300));
            
            // Hide suggestions when clicking outside
            document.addEventListener('click', (e) => {
                if (!searchInput.contains(e.target) && !suggestions.contains(e.target)) {
                    suggestions.style.display = 'none';
                }
            });
        }
    },
    
    selectProduct(productId) {
        const product = AppState.products.find(p => p.id === productId);
        if (product) {
            document.getElementById('productSearch').value = product.name;
            document.getElementById('productPrice').value = product.salePrice;
            document.getElementById('productSuggestions').style.display = 'none';
        }
    },
    
    viewInvoice(id) {
        const invoice = AppState.invoices.find(inv => inv.id === id);
        if (invoice) {
            // Show invoice details in modal
            showModal('تفاصيل الفاتورة', this.renderInvoiceDetails(invoice));
        }
    },
    
    renderInvoiceDetails(invoice) {
        return `
            <div class="invoice-details">
                <h6>فاتورة رقم: ${invoice.number}</h6>
                <p><strong>العميل:</strong> ${invoice.customerName}</p>
                <p><strong>التاريخ:</strong> ${formatDate(invoice.date)}</p>
                <p><strong>الإجمالي:</strong> ${formatCurrency(invoice.total)}</p>
                <p><strong>الحالة:</strong> ${invoice.status}</p>
            </div>
        `;
    }
};

// ========================================
// WAREHOUSES MODULE
// ========================================

const WarehousesModule = {
    init() {
        this.loadWarehouses();
        this.loadTransferRequests();
    },
    
    loadWarehouses() {
        const container = document.getElementById('warehousesList');
        if (!container) return;
        
        container.innerHTML = AppState.warehouses.map(warehouse => `
            <div class="col-lg-4 col-md-6 mb-4">
                <div class="card card-neon h-100">
                    <div class="card-body">
                        <h5 class="card-title">${warehouse.name}</h5>
                        <p class="card-text">${warehouse.location}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <span class="badge bg-neon-green">${warehouse.productsCount || 0} منتج</span>
                            <div class="btn-group">
                                <button class="btn btn-sm btn-outline-neon" onclick="WarehousesModule.viewWarehouse('${warehouse.id}')">
                                    <i class="bi bi-eye"></i>
                                </button>
                                <button class="btn btn-sm btn-outline-secondary" onclick="WarehousesModule.editWarehouse('${warehouse.id}')">
                                    <i class="bi bi-pencil"></i>
                                </button>
                            </div>
                        </div>
                        ${warehouse.subUser ? `
                            <div class="mt-2">
                                <small class="text-muted">مستخدم فرعي: ${warehouse.subUser.username}</small>
                            </div>
                        ` : ''}
                    </div>
                </div>
            </div>
        `).join('');
    },
    
    loadTransferRequests() {
        const tableBody = document.getElementById('transferRequestsTableBody');
        if (!tableBody) return;
        
        tableBody.innerHTML = AppState.transferRequests.map(request => `
            <tr>
                <td>${request.id}</td>
                <td>${request.fromWarehouse}</td>
                <td>${request.toWarehouse}</td>
                <td>${request.items.length} صنف</td>
                <td>
                    <span class="status-badge status-${request.status}">${request.status}</span>
                </td>
                <td>${formatDate(request.date)}</td>
                <td>
                    <button class="btn btn-sm btn-outline-neon me-1" onclick="WarehousesModule.viewRequest('${request.id}')">
                        <i class="bi bi-eye"></i>
                    </button>
                    ${request.status === 'pending' ? `
                        <button class="btn btn-sm btn-outline-success me-1" onclick="WarehousesModule.approveRequest('${request.id}')">
                            <i class="bi bi-check"></i>
                        </button>
                        <button class="btn btn-sm btn-outline-danger" onclick="WarehousesModule.rejectRequest('${request.id}')">
                            <i class="bi bi-x"></i>
                        </button>
                    ` : ''}
                </td>
            </tr>
        `).join('');
    },
    
    viewWarehouse(id) {
        const warehouse = AppState.warehouses.find(w => w.id === id);
        if (warehouse) {
            showModal('تفاصيل المخزن', this.renderWarehouseDetails(warehouse));
        }
    },
    
    renderWarehouseDetails(warehouse) {
        return `
            <div class="warehouse-details">
                <h6>${warehouse.name}</h6>
                <p><strong>الموقع:</strong> ${warehouse.location}</p>
                <p><strong>المسؤول:</strong> ${warehouse.manager}</p>
                ${warehouse.subUser ? `
                    <hr>
                    <h6>المستخدم الفرعي</h6>
                    <p><strong>اسم المستخدم:</strong> ${warehouse.subUser.username}</p>
                ` : ''}
            </div>
        `;
    },
    
    approveRequest(id) {
        const request = AppState.transferRequests.find(r => r.id === id);
        if (request) {
            request.status = 'approved';
            request.approvedBy = AppState.currentUser.name;
            request.approvedDate = new Date().toISOString();
            
            Storage.save('transferRequests', AppState.transferRequests);
            this.loadTransferRequests();
            
            NotificationManager.addNotification(`تم اعتماد طلب التحويل ${id}`, 'success');
        }
    },
    
    rejectRequest(id) {
        const request = AppState.transferRequests.find(r => r.id === id);
        if (request) {
            request.status = 'rejected';
            request.rejectedBy = AppState.currentUser.name;
            request.rejectedDate = new Date().toISOString();
            
            Storage.save('transferRequests', AppState.transferRequests);
            this.loadTransferRequests();
            
            NotificationManager.addNotification(`تم رفض طلب التحويل ${id}`, 'warning');
        }
    }
};

// ========================================
// HR MODULE
// ========================================

const HRModule = {
    init() {
        this.loadEmployees();
        this.loadAttendance();
        this.initPayroll();
    },
    
    loadEmployees() {
        const tableBody = document.getElementById('employeesTableBody');
        if (!tableBody) return;
        
        tableBody.innerHTML = AppState.employees.map(employee => `
            <tr>
                <td>${employee.name}</td>
                <td>${employee.position}</td>
                <td>${employee.department}</td>
                <td>${formatCurrency(employee.baseSalary)}</td>
                <td>${formatDate(employee.hireDate)}</td>
                <td>
                    <button class="btn btn-sm btn-outline-neon me-1" onclick="HRModule.editEmployee('${employee.id}')">
                        <i class="bi bi-pencil"></i>
                    </button>
                    <button class="btn btn-sm btn-outline-danger" onclick="HRModule.deleteEmployee('${employee.id}')">
                        <i class="bi bi-trash"></i>
                    </button>
                </td>
            </tr>
        `).join('');
    },
    
    loadAttendance() {
        const tableBody = document.getElementById('attendanceTableBody');
        if (!tableBody) return;
        
        const month = document.getElementById('attendanceMonth')?.value || new Date().toISOString().slice(0, 7);
        
        tableBody.innerHTML = AppState.employees.map(employee => {
            const attendance = this.calculateAttendance(employee.id, month);
            return `
                <tr>
                    <td>${employee.name}</td>
                    <td>${attendance.workingDays}</td>
                    <td class="text-success">${attendance.presentDays}</td>
                    <td class="text-danger">${attendance.absentDays}</td>
                    <td>
                        <button class="btn btn-sm btn-outline-neon" onclick="HRModule.viewAttendanceDetails('${employee.id}', '${month}')">
                            <i class="bi bi-calendar"></i>
                        </button>
                    </td>
                </tr>
            `;
        }).join('');
    },
    
    calculateAttendance(employeeId, month) {
        // Mock calculation - in real app this would come from attendance records
        const workingDays = 22; // Assuming 22 working days per month
        const presentDays = Math.floor(Math.random() * 3) + 20; // 20-22 days
        const absentDays = workingDays - presentDays;
        
        return { workingDays, presentDays, absentDays };
    },
    
    initPayroll() {
        const monthInput = document.getElementById('payrollMonth');
        if (monthInput) {
            monthInput.value = new Date().toISOString().slice(0, 7);
        }
    },
    
    editEmployee(id) {
        const employee = AppState.employees.find(e => e.id === id);
        if (employee) {
            // Show employee form modal
            showEmployeeForm(employee);
        }
    }
};

// ========================================
// REPORTS MODULE
// ========================================

const ReportsModule = {
    init() {
        this.initDateInputs();
    },
    
    initDateInputs() {
        const today = new Date();
        const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());
        
        const fromDate = document.getElementById('reportFromDate');
        const toDate = document.getElementById('reportToDate');
        
        if (fromDate) fromDate.value = lastMonth.toISOString().split('T')[0];
        if (toDate) toDate.value = today.toISOString().split('T')[0];
    }
};

// ========================================
// PROFILE MODULE
// ========================================

const ProfileModule = {
    init() {
        this.loadProfileData();
        this.loadProfileActivity();
    },
    
    loadProfileData() {
        if (!AppState.currentUser) return;
        
        const user = AppState.currentUser;
        document.getElementById('profileUserName').textContent = user.name;
        document.getElementById('profileUserRole').textContent = user.role;
        document.getElementById('profileUsername').value = user.username;
        document.getElementById('profileRole').value = user.role;
        document.getElementById('profileLastLogin').value = user.lastLogin ? 
            new Date(user.lastLogin).toLocaleString() : 'غير متوفر';
        document.getElementById('profileLanguage').value = AppState.currentLanguage;
    },
    
    loadProfileActivity() {
        const container = document.getElementById('profileActivityList');
        if (!container) return;
        
        // Mock recent activity
        const activities = [
            'قام بتسجيل الدخول',
            'عرض لوحة التحكم',
            'أنشأ فاتورة جديدة',
            'عدّل منتج'
        ];
        
        container.innerHTML = activities.map((activity, index) => `
            <div class="d-flex justify-content-between align-items-center mb-2">
                <span>${activity}</span>
                <small class="text-muted">${index + 1} دقيقة مضت</small>
            </div>
        `).join('');
    }
};

// ========================================
// REQUESTS MODULE
// ========================================

const RequestsModule = {
    init() {
        this.loadRequests();
    },
    
    loadRequests() {
        const tableBody = document.getElementById('requestsTableBody');
        if (!tableBody) return;
        
        // Combine transfer requests with other request types
        const allRequests = [
            ...AppState.transferRequests.map(r => ({...r, type: 'تحويل مخزني'}))
        ];
        
        tableBody.innerHTML = allRequests.map(request => `
            <tr>
                <td>${request.id}</td>
                <td>${request.type}</td>
                <td>${request.fromWarehouse || request.requester}</td>
                <td>
                    <span class="status-badge status-${request.status}">${request.status}</span>
                </td>
                <td>${formatDate(request.date)}</td>
                <td>
                    <button class="btn btn-sm btn-outline-neon me-1" onclick="RequestsModule.viewRequest('${request.id}')">
                        <i class="bi bi-eye"></i>
                    </button>
                    ${request.status === 'pending' ? `
                        <button class="btn btn-sm btn-outline-success me-1" onclick="RequestsModule.approveRequest('${request.id}')">
                            <i class="bi bi-check"></i>
                        </button>
                        <button class="btn btn-sm btn-outline-danger" onclick="RequestsModule.rejectRequest('${request.id}')">
                            <i class="bi bi-x"></i>
                        </button>
                    ` : ''}
                </td>
            </tr>
        `).join('');
    },
    
    viewRequest(id) {
        const request = AppState.transferRequests.find(r => r.id === id);
        if (request) {
            showModal('تفاصيل الطلب', this.renderRequestDetails(request));
        }
    },
    
    renderRequestDetails(request) {
        return `
            <div class="request-details">
                <h6>طلب رقم: ${request.id}</h6>
                <p><strong>من:</strong> ${request.fromWarehouse}</p>
                <p><strong>إلى:</strong> ${request.toWarehouse}</p>
                <p><strong>التاريخ:</strong> ${formatDate(request.date)}</p>
                <p><strong>الحالة:</strong> ${request.status}</p>
                
                <h6 class="mt-3">الأصناف المطلوبة:</h6>
                <div class="table-responsive">
                    <table class="table table-sm">
                        <thead>
                            <tr>
                                <th>المنتج</th>
                                <th>الكمية</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${request.items.map(item => `
                                <tr>
                                    <td>${item.productName}</td>
                                    <td>${item.quantity}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        `;
    },
    
    approveRequest(id) {
        // Use the same logic as WarehousesModule
        WarehousesModule.approveRequest(id);
        this.loadRequests();
    },
    
    rejectRequest(id) {
        // Use the same logic as WarehousesModule
        WarehousesModule.rejectRequest(id);
        this.loadRequests();
    }
};

// ========================================
// GLOBAL SEARCH
// ========================================

const GlobalSearch = {
    init() {
        const searchInput = document.getElementById('globalSearch');
        if (searchInput) {
            searchInput.addEventListener('input', debounce((e) => {
                this.performSearch(e.target.value);
            }, 300));
            
            searchInput.addEventListener('focus', () => {
                if (searchInput.value) {
                    this.performSearch(searchInput.value);
                }
            });
        }
    },
    
    performSearch(term) {
        if (term.length < 2) {
            this.hideResults();
            return;
        }
        
        const results = [];
        term = term.toLowerCase();
        
        // Search products
        AppState.products.forEach(product => {
            if (product.name.toLowerCase().includes(term) || 
                product.code.toLowerCase().includes(term) ||
                product.barcode.includes(term)) {
                results.push({
                    type: 'product',
                    title: product.name,
                    subtitle: product.code,
                    action: () => showView('products')
                });
            }
        });
        
        // Search customers
        AppState.customers.forEach(customer => {
            if (customer.name.toLowerCase().includes(term) || 
                customer.phone.includes(term)) {
                results.push({
                    type: 'customer',
                    title: customer.name,
                    subtitle: customer.phone,
                    action: () => showView('customers')
                });
            }
        });
        
        // Search invoices
        AppState.invoices.forEach(invoice => {
            if (invoice.number.toLowerCase().includes(term) || 
                invoice.customerName.toLowerCase().includes(term)) {
                results.push({
                    type: 'invoice',
                    title: `فاتورة ${invoice.number}`,
                    subtitle: invoice.customerName,
                    action: () => showView('sales')
                });
            }
        });
        
        this.showResults(results);
    },
    
    showResults(results) {
        const resultsContainer = document.getElementById('searchResults');
        if (!resultsContainer) return;
        
        if (results.length === 0) {
            resultsContainer.innerHTML = '<div class="p-3 text-muted text-center">لا توجد نتائج</div>';
        } else {
            resultsContainer.innerHTML = results.slice(0, 10).map(result => `
                <div class="search-result-item p-3 border-bottom" onclick="GlobalSearch.selectResult('${result.type}', '${result.action}')">
                    <div class="fw-semibold">${result.title}</div>
                    <small class="text-muted">${result.subtitle}</small>
                </div>
            `).join('');
        }
        
        resultsContainer.style.display = 'block';
    },
    
    hideResults() {
        const resultsContainer = document.getElementById('searchResults');
        if (resultsContainer) {
            resultsContainer.style.display = 'none';
        }
    },
    
    selectResult(type, actionString) {
        this.hideResults();
        // Execute the action (simplified)
        eval(actionString + '()');
    }
};

// ========================================
// KEYBOARD SHORTCUTS
// ========================================

const KeyboardShortcuts = {
    init() {
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey || e.metaKey) {
                switch (e.key.toLowerCase()) {
                    case 'i':
                        e.preventDefault();
                        if (hasPermission('sales')) {
                            createNewInvoice();
                        }
                        break;
                    case 'k':
                        e.preventDefault();
                        document.getElementById('globalSearch')?.focus();
                        break;
                    case 's':
                        e.preventDefault();
                        this.handleSave();
                        break;
                    case '/':
                        e.preventDefault();
                        this.showShortcutsModal();
                        break;
                }
            }
        });
    },
    
    handleSave() {
        // Find and trigger save button in current view
        const currentView = document.getElementById(`view-${AppState.currentView}`);
        const saveBtn = currentView?.querySelector('.btn-neon, [onclick*="save"]');
        if (saveBtn) {
            saveBtn.click();
        }
    },
    
    showShortcutsModal() {
        const modal = new bootstrap.Modal(document.getElementById('shortcutsModal'));
        modal.show();
    }
};

// ========================================
// PWA SERVICE WORKER
// ========================================

const PWAManager = {
    init() {
        this.createManifest();
        this.registerServiceWorker();
    },
    
    createManifest() {
        const manifest = {
            name: 'BRAINBYTE ERP',
            short_name: 'BRAINBYTE',
            description: 'Integrated Business Management System',
            start_url: '.',
            display: 'standalone',
            background_color: '#ffffff',
            theme_color: '#00ffff',
            icons: [
                {
                    src: 'images/logo.png',
                    sizes: '192x192',
                    type: 'image/png'
                }
            ]
        };
        
        const manifestBlob = new Blob([JSON.stringify(manifest)], {type: 'application/json'});
        const manifestURL = URL.createObjectURL(manifestBlob);
        document.getElementById('manifestLink').href = manifestURL;
    },
    
    registerServiceWorker() {
        if ('serviceWorker' in navigator) {
            const swCode = `
                const CACHE_NAME = 'brainbyte-erp-v1';
                const urlsToCache = [
                    '.',
                    'index.html',
                    'styles.css',
                    'app.js'
                ];
                
                self.addEventListener('install', event => {
                    event.waitUntil(
                        caches.open(CACHE_NAME)
                            .then(cache => cache.addAll(urlsToCache))
                    );
                });
                
                self.addEventListener('fetch', event => {
                    event.respondWith(
                        caches.match(event.request)
                            .then(response => {
                                return response || fetch(event.request);
                            })
                    );
                });
            `;
            
            const swBlob = new Blob([swCode], {type: 'application/javascript'});
            const swURL = URL.createObjectURL(swBlob);
            
            navigator.serviceWorker.register(swURL)
                .then(registration => {
                    console.log('SW registered successfully');
                })
                .catch(error => {
                    console.log('SW registration failed');
                });
        }
    }
};

// ========================================
// MODAL SYSTEM
// ========================================

function showModal(title, content, saveCallback = null) {
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalBody').innerHTML = content;
    
    const saveBtn = document.getElementById('modalSaveBtn');
    if (saveCallback) {
        saveBtn.onclick = saveCallback;
        saveBtn.style.display = 'block';
    } else {
        saveBtn.style.display = 'none';
    }
    
    const modal = new bootstrap.Modal(document.getElementById('universalModal'));
    modal.show();
}

function showConfirmModal(message, confirmCallback) {
    document.getElementById('confirmModalBody').innerHTML = message;
    document.getElementById('confirmBtn').onclick = () => {
        confirmCallback();
        bootstrap.Modal.getInstance(document.getElementById('confirmModal')).hide();
    };
    
    const modal = new bootstrap.Modal(document.getElementById('confirmModal'));
    modal.show();
}

// ========================================
// SPECIFIC FUNCTIONS
// ========================================

function createNewInvoice() {
    showView('sales');
    const invoiceForm = document.getElementById('invoiceForm');
    if (invoiceForm) {
        invoiceForm.classList.remove('d-none');
        // Reset form
        SalesModule.currentInvoice = {
            id: generateId(),
            number: 'INV-' + Date.now().toString().slice(-6),
            items: [],
            total: 0
        };
    }
}

function showProductForm(product = null) {
    const isEdit = product !== null;
    const title = isEdit ? 'تعديل المنتج' : 'إضافة منتج جديد';
    
    const formHTML = `
        <form id="productForm">
            <div class="row">
                <div class="col-md-6">
                    <div class="mb-3">
                        <label class="form-label">اسم المنتج</label>
                        <input type="text" class="form-control" id="productName" value="${product?.name || ''}" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">الكود الداخلي</label>
                        <input type="text" class="form-control" id="productCode" value="${product?.code || ''}" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">الباركود</label>
                        <input type="text" class="form-control" id="productBarcode" value="${product?.barcode || ''}" required>
                        <div id="barcodePreview" class="barcode-container mt-2"></div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="mb-3">
                        <label class="form-label">سعر الشراء</label>
                        <input type="number" class="form-control" id="productPurchasePrice" value="${product?.purchasePrice || ''}" step="0.01" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">سعر البيع</label>
                        <input type="number" class="form-control" id="productSalePrice" value="${product?.salePrice || ''}" step="0.01" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">الكمية المبدئية</label>
                        <input type="number" class="form-control" id="productStock" value="${product?.stock || 0}" min="0">
                    </div>
                </div>
            </div>
        </form>
    `;
    
    showModal(title, formHTML, () => {
        const formData = {
            name: document.getElementById('productName').value,
            code: document.getElementById('productCode').value,
            barcode: document.getElementById('productBarcode').value,
            purchasePrice: parseFloat(document.getElementById('productPurchasePrice').value),
            salePrice: parseFloat(document.getElementById('productSalePrice').value),
            stock: parseInt(document.getElementById('productStock').value)
        };
        
        if (isEdit) {
            // Update existing product
            const index = AppState.products.findIndex(p => p.id === product.id);
            if (index !== -1) {
                AppState.products[index] = { ...AppState.products[index], ...formData };
            }
        } else {
            // Add new product
            const newProduct = {
                id: generateId(),
                ...formData,
                category: 'عام',
                image: 'https://via.placeholder.com/150',
                minStock: 10,
                createdAt: new Date().toISOString()
            };
            AppState.products.push(newProduct);
        }
        
        Storage.save('products', AppState.products);
        ProductsModule.loadProducts();
        NotificationManager.addNotification(
            isEdit ? 'تم تحديث المنتج بنجاح' : 'تم إضافة المنتج بنجاح', 
            'success'
        );
        
        bootstrap.Modal.getInstance(document.getElementById('universalModal')).hide();
    });
    
    // Live barcode preview
    setTimeout(() => {
        const barcodeInput = document.getElementById('productBarcode');
        const preview = document.getElementById('barcodePreview');
        
        if (barcodeInput && preview) {
            const updateBarcode = () => {
                const value = barcodeInput.value;
                if (value && window.JsBarcode) {
                    preview.innerHTML = '<canvas id="barcodeCanvas"></canvas>';
                    setTimeout(() => {
                        const canvas = document.getElementById('barcodeCanvas');
                        if (canvas) {
                            try {
                                JsBarcode(canvas, value, {
                                    format: "CODE128",
                                    width: 2,
                                    height: 50,
                                    displayValue: true
                                });
                            } catch (e) {
                                preview.innerHTML = '<small class="text-danger">باركود غير صالح</small>';
                            }
                        }
                    }, 10);
                } else {
                    preview.innerHTML = '';
                }
            };
            
            barcodeInput.addEventListener('input', debounce(updateBarcode, 500));
            if (product?.barcode) {
                updateBarcode();
            }
        }
    }, 100);
}

function showEmployeeForm(employee = null) {
    const isEdit = employee !== null;
    const title = isEdit ? 'تعديل الموظف' : 'إضافة موظف جديد';
    
    const formHTML = `
        <form id="employeeForm">
            <div class="row">
                <div class="col-md-6">
                    <div class="mb-3">
                        <label class="form-label">الاسم</label>
                        <input type="text" class="form-control" id="employeeName" value="${employee?.name || ''}" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">المنصب</label>
                        <input type="text" class="form-control" id="employeePosition" value="${employee?.position || ''}" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">القسم</label>
                        <select class="form-select" id="employeeDepartment" required>
                            <option value="">اختر القسم</option>
                            <option value="إدارة" ${employee?.department === 'إدارة' ? 'selected' : ''}>إدارة</option>
                            <option value="مبيعات" ${employee?.department === 'مبيعات' ? 'selected' : ''}>مبيعات</option>
                            <option value="مخازن" ${employee?.department === 'مخازن' ? 'selected' : ''}>مخازن</option>
                            <option value="محاسبة" ${employee?.department === 'محاسبة' ? 'selected' : ''}>محاسبة</option>
                        </select>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="mb-3">
                        <label class="form-label">الراتب الأساسي</label>
                        <input type="number" class="form-control" id="employeeSalary" value="${employee?.baseSalary || ''}" step="0.01" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">تاريخ التوظيف</label>
                        <input type="date" class="form-control" id="employeeHireDate" value="${employee?.hireDate || new Date().toISOString().split('T')[0]}" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">رقم الهاتف</label>
                        <input type="tel" class="form-control" id="employeePhone" value="${employee?.phone || ''}">
                    </div>
                </div>
            </div>
        </form>
    `;
    
    showModal(title, formHTML, () => {
        const formData = {
            name: document.getElementById('employeeName').value,
            position: document.getElementById('employeePosition').value,
            department: document.getElementById('employeeDepartment').value,
            baseSalary: parseFloat(document.getElementById('employeeSalary').value),
            hireDate: document.getElementById('employeeHireDate').value,
            phone: document.getElementById('employeePhone').value
        };
        
        if (isEdit) {
            const index = AppState.employees.findIndex(e => e.id === employee.id);
            if (index !== -1) {
                AppState.employees[index] = { ...AppState.employees[index], ...formData };
            }
        } else {
            const newEmployee = {
                id: generateId(),
                ...formData,
                createdAt: new Date().toISOString()
            };
            AppState.employees.push(newEmployee);
        }
        
        Storage.save('employees', AppState.employees);
        HRModule.loadEmployees();
        NotificationManager.addNotification(
            isEdit ? 'تم تحديث بيانات الموظف' : 'تم إضافة الموظف بنجاح', 
            'success'
        );
        
        bootstrap.Modal.getInstance(document.getElementById('universalModal')).hide();
    });
}

function showWarehouseForm(warehouse = null) {
    const isEdit = warehouse !== null;
    const title = isEdit ? 'تعديل المخزن' : 'إضافة مخزن جديد';
    
    const formHTML = `
        <form id="warehouseForm">
            <div class="mb-3">
                <label class="form-label">اسم المخزن</label>
                <input type="text" class="form-control" id="warehouseName" value="${warehouse?.name || ''}" required>
            </div>
            <div class="mb-3">
                <label class="form-label">الموقع</label>
                <input type="text" class="form-control" id="warehouseLocation" value="${warehouse?.location || ''}" required>
            </div>
            <div class="mb-3">
                <label class="form-label">المسؤول</label>
                <input type="text" class="form-control" id="warehouseManager" value="${warehouse?.manager || ''}" required>
            </div>
            
            <hr>
            <h6>المستخدم الفرعي (اختياري)</h6>
            <div class="mb-3">
                <label class="form-label">اسم المستخدم</label>
                <input type="text" class="form-control" id="subUsername" value="${warehouse?.subUser?.username || ''}">
            </div>
            <div class="mb-3">
                <label class="form-label">كلمة المرور</label>
                <input type="password" class="form-control" id="subPassword" value="${warehouse?.subUser?.password || ''}">
            </div>
        </form>
    `;
    
    showModal(title, formHTML, () => {
        const formData = {
            name: document.getElementById('warehouseName').value,
            location: document.getElementById('warehouseLocation').value,
            manager: document.getElementById('warehouseManager').value
        };
        
        const subUsername = document.getElementById('subUsername').value;
        const subPassword = document.getElementById('subPassword').value;
        
        if (subUsername && subPassword) {
            formData.subUser = {
                username: subUsername,
                password: subPassword
            };
        }
        
        if (isEdit) {
            const index = AppState.warehouses.findIndex(w => w.id === warehouse.id);
            if (index !== -1) {
                AppState.warehouses[index] = { ...AppState.warehouses[index], ...formData };
            }
        } else {
            const newWarehouse = {
                id: generateId(),
                ...formData,
                createdAt: new Date().toISOString(),
                productsCount: 0
            };
            AppState.warehouses.push(newWarehouse);
        }
        
        Storage.save('warehouses', AppState.warehouses);
        WarehousesModule.loadWarehouses();
        NotificationManager.addNotification(
            isEdit ? 'تم تحديث المخزن بنجاح' : 'تم إضافة المخزن بنجاح', 
            'success'
        );
        
        bootstrap.Modal.getInstance(document.getElementById('universalModal')).hide();
    });
}

function showWarehouseTransferForm() {
    const formHTML = `
        <form id="transferForm">
            <div class="mb-3">
                <label class="form-label">من مخزن</label>
                <select class="form-select" id="transferFrom" required>
                    <option value="">اختر المخزن</option>
                    ${AppState.warehouses.map(w => `<option value="${w.id}">${w.name}</option>`).join('')}
                </select>
            </div>
            <div class="mb-3">
                <label class="form-label">إلى مخزن</label>
                <select class="form-select" id="transferTo" required>
                    <option value="">اختر المخزن</option>
                    ${AppState.warehouses.map(w => `<option value="${w.id}">${w.name}</option>`).join('')}
                </select>
            </div>
            
            <h6>الأصناف المطلوبة</h6>
            <div id="transferItems">
                <div class="row mb-2">
                    <div class="col-6">
                        <select class="form-select transfer-product">
                            <option value="">اختر المنتج</option>
                            ${AppState.products.map(p => `<option value="${p.id}">${p.name}</option>`).join('')}
                        </select>
                    </div>
                    <div class="col-4">
                        <input type="number" class="form-control transfer-quantity" placeholder="الكمية" min="1" value="1">
                    </div>
                    <div class="col-2">
                        <button type="button" class="btn btn-sm btn-outline-neon" onclick="addTransferItem()">
                            <i class="bi bi-plus"></i>
                        </button>
                    </div>
                </div>
            </div>
            
            <div class="mb-3">
                <label class="form-label">ملاحظات</label>
                <textarea class="form-control" id="transferNotes" rows="3"></textarea>
            </div>
        </form>
    `;
    
    showModal('طلب تحويل مخزني', formHTML, () => {
        const fromWarehouse = document.getElementById('transferFrom').value;
        const toWarehouse = document.getElementById('transferTo').value;
        const notes = document.getElementById('transferNotes').value;
        
        if (!fromWarehouse || !toWarehouse) {
            NotificationManager.addNotification('يرجى اختيار المخازن', 'warning');
            return;
        }
        
        if (fromWarehouse === toWarehouse) {
            NotificationManager.addNotification('لا يمكن التحويل إلى نفس المخزن', 'warning');
            return;
        }
        
        const items = [];
        document.querySelectorAll('.transfer-product').forEach((select, index) => {
            const productId = select.value;
            const quantity = document.querySelectorAll('.transfer-quantity')[index]?.value;
            
            if (productId && quantity > 0) {
                const product = AppState.products.find(p => p.id === productId);
                if (product) {
                    items.push({
                        productId,
                        productName: product.name,
                        quantity: parseInt(quantity)
                    });
                }
            }
        });
        
        if (items.length === 0) {
            NotificationManager.addNotification('يرجى إضافة أصناف للتحويل', 'warning');
            return;
        }
        
        const newRequest = {
            id: 'REQ-' + Date.now().toString().slice(-6),
            type: 'transfer',
            fromWarehouse: AppState.warehouses.find(w => w.id === fromWarehouse)?.name,
            toWarehouse: AppState.warehouses.find(w => w.id === toWarehouse)?.name,
            items,
            notes,
            status: 'pending',
            date: new Date().toISOString(),
            requester: AppState.currentUser.name
        };
        
        AppState.transferRequests.push(newRequest);
        Storage.save('transferRequests', AppState.transferRequests);
        
        // Add notification for admin
        NotificationManager.addNotification(
            `طلب تحويل مخزني جديد: ${newRequest.id}`,
            'info',
            true
        );
        
        WarehousesModule.loadTransferRequests();
        bootstrap.Modal.getInstance(document.getElementById('universalModal')).hide();
    });
}

function addTransferItem() {
    const container = document.getElementById('transferItems');
    const newItem = document.createElement('div');
    newItem.className = 'row mb-2';
    newItem.innerHTML = `
        <div class="col-6">
            <select class="form-select transfer-product">
                <option value="">اختر المنتج</option>
                ${AppState.products.map(p => `<option value="${p.id}">${p.name}</option>`).join('')}
            </select>
        </div>
        <div class="col-4">
            <input type="number" class="form-control transfer-quantity" placeholder="الكمية" min="1" value="1">
        </div>
        <div class="col-2">
            <button type="button" class="btn btn-sm btn-outline-danger" onclick="this.parentElement.parentElement.remove()">
                <i class="bi bi-trash"></i>
            </button>
        </div>
    `;
    container.appendChild(newItem);
}

function addProductToInvoice() {
    const productName = document.getElementById('productSearch').value;
    const quantity = parseInt(document.getElementById('productQuantity').value);
    const price = parseFloat(document.getElementById('productPrice').value);
    
    if (!productName || !quantity || !price) {
        NotificationManager.addNotification('يرجى ملء جميع بيانات المنتج', 'warning');
        return;
    }
    
    const product = AppState.products.find(p => p.name === productName);
    if (!product) {
        NotificationManager.addNotification('المنتج غير موجود', 'error');
        return;
    }
    
    if (!SalesModule.currentInvoice) {
        SalesModule.currentInvoice = {
            id: generateId(),
            number: 'INV-' + Date.now().toString().slice(-6),
            items: [],
            total: 0
        };
    }
    
    const item = {
        id: generateId(),
        productId: product.id,
        productName: product.name,
        quantity,
        price,
        discount: 0,
        total: quantity * price
    };
    
    SalesModule.currentInvoice.items.push(item);
    this.updateInvoiceTable();
    this.calculateInvoiceTotal();
    
    // Clear form
    document.getElementById('productSearch').value = '';
    document.getElementById('productQuantity').value = '1';
    document.getElementById('productPrice').value = '';
}

function updateInvoiceTable() {
    const tableBody = document.getElementById('invoiceItemsTableBody');
    if (!tableBody || !SalesModule.currentInvoice) return;
    
    tableBody.innerHTML = SalesModule.currentInvoice.items.map(item => `
        <tr>
            <td>${item.productName}</td>
            <td>${item.quantity}</td>
            <td>${formatCurrency(item.price)}</td>
            <td>
                <input type="number" class="form-control form-control-sm" value="${item.discount}" 
                       onchange="updateItemDiscount('${item.id}', this.value)" min="0" step="0.01">
            </td>
            <td>${formatCurrency(item.total)}</td>
            <td>
                <button class="btn btn-sm btn-outline-danger" onclick="removeInvoiceItem('${item.id}')">
                    <i class="bi bi-trash"></i>
                </button>
            </td>
        </tr>
    `).join('');
}

function updateItemDiscount(itemId, discount) {
    if (!SalesModule.currentInvoice) return;
    
    const item = SalesModule.currentInvoice.items.find(i => i.id === itemId);
    if (item) {
        item.discount = parseFloat(discount) || 0;
        item.total = (item.quantity * item.price) - item.discount;
        this.calculateInvoiceTotal();
        updateInvoiceTable();
    }
}

function removeInvoiceItem(itemId) {
    if (!SalesModule.currentInvoice) return;
    
    SalesModule.currentInvoice.items = SalesModule.currentInvoice.items.filter(i => i.id !== itemId);
    updateInvoiceTable();
    this.calculateInvoiceTotal();
}

function calculateInvoiceTotal() {
    if (!SalesModule.currentInvoice) return;
    
    const subtotal = SalesModule.currentInvoice.items.reduce((sum, item) => sum + (item.quantity * item.price), 0);
    const totalDiscount = SalesModule.currentInvoice.items.reduce((sum, item) => sum + item.discount, 0);
    const total = subtotal - totalDiscount;
    
    document.getElementById('invoiceSubtotal').textContent = formatCurrency(subtotal);
    document.getElementById('invoiceDiscount').textContent = formatCurrency(totalDiscount);
    document.getElementById('invoiceTotal').textContent = formatCurrency(total);
    
    SalesModule.currentInvoice.subtotal = subtotal;
    SalesModule.currentInvoice.totalDiscount = totalDiscount;
    SalesModule.currentInvoice.total = total;
}

function saveInvoice() {
    if (!SalesModule.currentInvoice || SalesModule.currentInvoice.items.length === 0) {
        NotificationManager.addNotification('لا يمكن حفظ فاتورة فارغة', 'warning');
        return;
    }
    
    const customerId = document.getElementById('invoiceCustomer').value;
    const warehouseId = document.getElementById('invoiceWarehouse').value;
    const notes = document.getElementById('invoiceNotes').value;
    
    if (!customerId || !warehouseId) {
        NotificationManager.addNotification('يرجى اختيار العميل والمخزن', 'warning');
        return;
    }
    
    const customer = AppState.customers.find(c => c.id === customerId);
    const warehouse = AppState.warehouses.find(w => w.id === warehouseId);
    
    const invoice = {
        ...SalesModule.currentInvoice,
        customerId,
        customerName: customer?.name || 'غير محدد',
        warehouseId,
        warehouseName: warehouse?.name || 'غير محدد',
        date: document.getElementById('invoiceDate').value,
        notes,
        status: 'confirmed',
        createdBy: AppState.currentUser.name,
        createdAt: new Date().toISOString()
    };
    
    AppState.invoices.push(invoice);
    Storage.save('invoices', AppState.invoices);
    
    // Update product stock
    invoice.items.forEach(item => {
        const product = AppState.products.find(p => p.id === item.productId);
        if (product) {
            product.stock -= item.quantity;
            product.soldQuantity = (product.soldQuantity || 0) + item.quantity;
        }
    });
    Storage.save('products', AppState.products);
    
    NotificationManager.addNotification('تم حفظ الفاتورة بنجاح', 'success');
    
    // Reset form
    SalesModule.currentInvoice = null;
    document.getElementById('invoiceForm').classList.add('d-none');
    SalesModule.loadSalesHistory();
}

function printInvoice() {
    if (!SalesModule.currentInvoice) return;
    
    const printContent = this.generateInvoicePrintHTML(SalesModule.currentInvoice);
    const printWindow = window.open('', '_blank');
    printWindow.document.write(printContent);
    printWindow.document.close();
    printWindow.print();
}

function generateInvoicePrintHTML(invoice) {
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <title>فاتورة ${invoice.number}</title>
            <style>
                body { font-family: Arial, sans-serif; direction: rtl; }
                .invoice-header { text-align: center; margin-bottom: 20px; }
                .invoice-table { width: 100%; border-collapse: collapse; }
                .invoice-table th, .invoice-table td { 
                    border: 1px solid #ddd; 
                    padding: 8px; 
                    text-align: center; 
                }
                .invoice-total { font-weight: bold; font-size: 1.2em; }
            </style>
        </head>
        <body>
            <div class="invoice-header">
                <h2>BRAINBYTE ERP</h2>
                <h3>فاتورة مبيعات رقم: ${invoice.number}</h3>
                <p>التاريخ: ${formatDate(invoice.date || new Date())}</p>
            </div>
            
            <table class="invoice-table">
                <thead>
                    <tr>
                        <th>المنتج</th>
                        <th>الكمية</th>
                        <th>السعر</th>
                        <th>الخصم</th>
                        <th>المجموع</th>
                    </tr>
                </thead>
                <tbody>
                    ${invoice.items.map(item => `
                        <tr>
                            <td>${item.productName}</td>
                            <td>${item.quantity}</td>
                            <td>${formatCurrency(item.price)}</td>
                            <td>${formatCurrency(item.discount)}</td>
                            <td>${formatCurrency(item.total)}</td>
                        </tr>
                    `).join('')}
                </tbody>
                <tfoot>
                    <tr class="invoice-total">
                        <td colspan="4">الإجمالي</td>
                        <td>${formatCurrency(invoice.total)}</td>
                    </tr>
                </tfoot>
            </table>
            
            ${invoice.notes ? `<p><strong>ملاحظات:</strong> ${invoice.notes}</p>` : ''}
        </body>
        </html>
    `;
}

// ========================================
// EXPORT FUNCTIONS
// ========================================

function exportDashboard() {
    const dashboard = document.getElementById('view-dashboard');
    if (dashboard && window.html2canvas) {
        html2canvas(dashboard).then(canvas => {
            const link = document.createElement('a');
            link.download = `dashboard-${new Date().toISOString().split('T')[0]}.png`;
            link.href = canvas.toDataURL();
            link.click();
            
            NotificationManager.addNotification('تم تصدير لوحة التحكم بنجاح', 'success');
        });
    }
}

function exportReport() {
    NotificationManager.addNotification('سيتم تصدير التقرير قريباً', 'info');
}

function exportData() {
    const data = {
        products: AppState.products,
        warehouses: AppState.warehouses,
        customers: AppState.customers,
        suppliers: AppState.suppliers,
        employees: AppState.employees,
        invoices: AppState.invoices,
        settings: AppState.settings,
        exportDate: new Date().toISOString()
    };
    
    const dataStr = JSON.stringify(data, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});
    const url = URL.createObjectURL(dataBlob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `brainbyte-backup-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    
    URL.revokeObjectURL(url);
    NotificationManager.addNotification('تم تصدير البيانات بنجاح', 'success');
}

function importData() {
    const fileInput = document.getElementById('hiddenFileInput');
    fileInput.onchange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const data = JSON.parse(e.target.result);
                    
                    // Validate and import data
                    if (data.products) AppState.products = data.products;
                    if (data.warehouses) AppState.warehouses = data.warehouses;
                    if (data.customers) AppState.customers = data.customers;
                    if (data.suppliers) AppState.suppliers = data.suppliers;
                    if (data.employees) AppState.employees = data.employees;
                    if (data.invoices) AppState.invoices = data.invoices;
                    if (data.settings) AppState.settings = data.settings;
                    
                    // Save to localStorage
                    Object.keys(data).forEach(key => {
                        if (key !== 'exportDate') {
                            Storage.save(key, data[key]);
                        }
                    });
                    
                    NotificationManager.addNotification('تم استيراد البيانات بنجاح', 'success');
                    
                    // Refresh current view
                    loadViewData(AppState.currentView);
                    
                } catch (error) {
                    NotificationManager.addNotification('خطأ في استيراد البيانات', 'error');
                }
            };
            reader.readAsText(file);
        }
    };
    fileInput.click();
}

function resetData() {
    showConfirmModal(
        'هل أنت متأكد من إعادة تعيين جميع البيانات؟ هذا الإجراء لا يمكن التراجع عنه.',
        () => {
            Storage.clear();
            seedData();
            loadAppData();
            NotificationManager.addNotification('تم إعادة تعيين البيانات بنجاح', 'info');
            
            // Refresh current view
            loadViewData(AppState.currentView);
        }
    );
}

function generateReport() {
    const reportType = document.getElementById('reportType').value;
    const fromDate = document.getElementById('reportFromDate').value;
    const toDate = document.getElementById('reportToDate').value;
    
    const reportContent = document.getElementById('reportContent');
    
    let reportHTML = '';
    
    switch (reportType) {
        case 'sales':
            reportHTML = this.generateSalesReport(fromDate, toDate);
            break;
        case 'inventory':
            reportHTML = this.generateInventoryReport();
            break;
        case 'financial':
            reportHTML = this.generateFinancialReport(fromDate, toDate);
            break;
        case 'employee':
            reportHTML = this.generateEmployeeReport();
            break;
        default:
            reportHTML = '<p class="text-center">نوع تقرير غير مدعوم</p>';
    }
    
    reportContent.innerHTML = `
        <div class="card-header">
            <h5 class="card-title mb-0">${I18n.t(reportType + 'Report')}</h5>
        </div>
        <div class="card-body">
            ${reportHTML}
        </div>
    `;
}

function generateSalesReport(fromDate, toDate) {
    const filteredInvoices = AppState.invoices.filter(inv => {
        const invDate = new Date(inv.date);
        return invDate >= new Date(fromDate) && invDate <= new Date(toDate);
    });
    
    const totalSales = filteredInvoices.reduce((sum, inv) => sum + inv.total, 0);
    const totalInvoices = filteredInvoices.length;
    
    return `
        <div class="row mb-4">
            <div class="col-md-4">
                <div class="card bg-light">
                    <div class="card-body text-center">
                        <h3 class="neon-text">${totalInvoices}</h3>
                        <p class="mb-0">إجمالي الفواتير</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card bg-light">
                    <div class="card-body text-center">
                        <h3 class="neon-text">${formatCurrency(totalSales)}</h3>
                        <p class="mb-0">إجمالي المبيعات</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card bg-light">
                    <div class="card-body text-center">
                        <h3 class="neon-text">${totalInvoices > 0 ? formatCurrency(totalSales / totalInvoices) : '0'}</h3>
                        <p class="mb-0">متوسط الفاتورة</p>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="table-responsive">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>رقم الفاتورة</th>
                        <th>التاريخ</th>
                        <th>العميل</th>
                        <th>الإجمالي</th>
                        <th>الحالة</th>
                    </tr>
                </thead>
                <tbody>
                    ${filteredInvoices.map(invoice => `
                        <tr>
                            <td>${invoice.number}</td>
                            <td>${formatDate(invoice.date)}</td>
                            <td>${invoice.customerName}</td>
                            <td>${formatCurrency(invoice.total)}</td>
                            <td><span class="status-badge status-${invoice.status}">${invoice.status}</span></td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
    `;
}

function generateInventoryReport() {
    const totalProducts = AppState.products.length;
    const totalValue = AppState.products.reduce((sum, p) => sum + (p.stock * p.purchasePrice), 0);
    const lowStockItems = AppState.products.filter(p => p.stock <= p.minStock).length;
    
    return `
        <div class="row mb-4">
            <div class="col-md-4">
                <div class="card bg-light">
                    <div class="card-body text-center">
                        <h3 class="neon-text">${totalProducts}</h3>
                        <p class="mb-0">إجمالي المنتجات</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card bg-light">
                    <div class="card-body text-center">
                        <h3 class="neon-text">${formatCurrency(totalValue)}</h3>
                        <p class="mb-0">قيمة المخزون</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card bg-light">
                    <div class="card-body text-center">
                        <h3 class="neon-text text-warning">${lowStockItems}</h3>
                        <p class="mb-0">مخزون منخفض</p>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="table-responsive">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>المنتج</th>
                        <th>الكود</th>
                        <th>المخزون الحالي</th>
                        <th>الحد الأدنى</th>
                        <th>قيمة المخزون</th>
                        <th>الحالة</th>
                    </tr>
                </thead>
                <tbody>
                    ${AppState.products.map(product => `
                        <tr>
                            <td>${product.name}</td>
                            <td>${product.code}</td>
                            <td>${product.stock}</td>
                            <td>${product.minStock}</td>
                            <td>${formatCurrency(product.stock * product.purchasePrice)}</td>
                            <td>
                                <span class="badge ${product.stock <= product.minStock ? 'bg-warning' : 'bg-success'}">
                                    ${product.stock <= product.minStock ? 'منخفض' : 'طبيعي'}
                                </span>
                            </td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
    `;
}

function clearProductFilters() {
    document.getElementById('productSearch').value = '';
    document.getElementById('categoryFilter').value = '';
    document.getElementById('stockFilter').value = '';
    ProductsModule.loadProducts();
}

function saveCompanySettings() {
    const settings = {
        companyName: document.getElementById('companyName').value,
        companyPhone: document.getElementById('companyPhone').value,
        companyEmail: document.getElementById('companyEmail').value,
        companyAddress: document.getElementById('companyAddress').value,
        currency: document.getElementById('currency').value,
        invoiceFooter: document.getElementById('invoiceFooter').value,
        defaultLanguage: document.getElementById('defaultLanguage').value,
        dateFormat: document.getElementById('dateFormat').value,
        enableBarcode: document.getElementById('enableBarcode').checked,
        enableNotifications: document.getElementById('enableNotifications').checked
    };
    
    AppState.settings = { ...AppState.settings, ...settings };
    Storage.save('settings', AppState.settings);
    
    NotificationManager.addNotification('تم حفظ الإعدادات بنجاح', 'success');
}

function updateProfile() {
    const newLanguage = document.getElementById('profileLanguage').value;
    if (newLanguage !== AppState.currentLanguage) {
        I18n.setLanguage(newLanguage);
    }
    
    NotificationManager.addNotification('تم تحديث الملف الشخصي', 'success');
}

function changeAvatar() {
    NotificationManager.addNotification('ميزة تغيير الصورة قيد التطوير', 'info');
}

function generatePayroll() {
    const month = document.getElementById('payrollMonth').value;
    const tableBody = document.getElementById('payrollTableBody');
    
    if (!tableBody) return;
    
    tableBody.innerHTML = AppState.employees.map(employee => {
        const attendance = HRModule.calculateAttendance(employee.id, month);
        const allowances = 500; // Mock allowances
        const deductions = (employee.baseSalary * attendance.absentDays) / 22; // Deduct for absent days
        const netSalary = employee.baseSalary + allowances - deductions;
        
        return `
            <tr>
                <td>${employee.name}</td>
                <td>${formatCurrency(employee.baseSalary)}</td>
                <td class="text-success">${formatCurrency(allowances)}</td>
                <td class="text-danger">${formatCurrency(deductions)}</td>
                <td class="fw-bold neon-text">${formatCurrency(netSalary)}</td>
                <td>
                    <button class="btn btn-sm btn-outline-neon" onclick="printPayslip('${employee.id}', '${month}')">
                        <i class="bi bi-printer"></i>
                    </button>
                </td>
            </tr>
        `;
    }).join('');
    
    NotificationManager.addNotification('تم إنشاء كشف الرواتب', 'success');
}

function printPayslip(employeeId, month) {
    NotificationManager.addNotification('طباعة كشف الراتب قيد التطوير', 'info');
}

function logout() {
    AuthManager.logout();
}

// ========================================
// DATA SEEDING
// ========================================

function seedData() {
    // Categories
    AppState.categories = ['إلكترونيات', 'ملابس', 'أطعمة', 'مستحضرات تجميل', 'أدوات منزلية'];
    
    // Products
    AppState.products = [
        {
            id: 'prod1',
            name: 'لابتوب HP Pavilion',
            code: 'TECH001',
            barcode: '1234567890123',
            category: 'إلكترونيات',
            purchasePrice: 2500,
            salePrice: 3000,
            stock: 15,
            minStock: 5,
            image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=150',
            soldQuantity: 8
        },
        {
            id: 'prod2',
            name: 'هاتف iPhone 15',
            code: 'TECH002',
            barcode: '1234567890124',
            category: 'إلكترونيات',
            purchasePrice: 3500,
            salePrice: 4200,
            stock: 8,
            minStock: 3,
            image: 'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=150',
            soldQuantity: 12
        },
        {
            id: 'prod3',
            name: 'قميص قطني',
            code: 'CLO001',
            barcode: '1234567890125',
            category: 'ملابس',
            purchasePrice: 45,
            salePrice: 75,
            stock: 25,
            minStock: 10,
            image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=150',
            soldQuantity: 35
        }
    ];
    
    // Warehouses
    AppState.warehouses = [
        {
            id: 'wh1',
            name: 'المخزن الرئيسي',
            location: 'الرياض - حي الملك فهد',
            manager: 'أحمد محمد',
            productsCount: 150,
            subUser: {
                username: 'store1',
                password: '123'
            }
        },
        {
            id: 'wh2',
            name: 'مخزن جدة',
            location: 'جدة - حي الروضة',
            manager: 'سارة أحمد',
            productsCount: 85
        }
    ];
    
    // Customers
    AppState.customers = [
        {
            id: 'cust1',
            name: 'محمد العلي',
            phone: '+966501234567',
            email: 'mohammed@example.com',
            address: 'الرياض - حي النزهة'
        },
        {
            id: 'cust2',
            name: 'فاطمة السلمان',
            phone: '+966507654321',
            email: 'fatima@example.com',
            address: 'جدة - حي الحمراء'
        },
        {
            id: 'cust3',
            name: 'خالد الأحمد',
            phone: '+966551234567',
            email: 'khalid@example.com',
            address: 'الدمام - حي الشاطئ'
        }
    ];
    
    // Suppliers
    AppState.suppliers = [
        {
            id: 'supp1',
            name: 'شركة التقنية المتقدمة',
            phone: '+966112345678',
            email: 'info@techadvanced.com',
            address: 'الرياض - المنطقة الصناعية'
        },
        {
            id: 'supp2',
            name: 'مؤسسة الجودة للملابس',
            phone: '+966126789012',
            email: 'sales@qualityclothing.com',
            address: 'جدة - السليمانية'
        }
    ];
    
    // Employees
    AppState.employees = [
        {
            id: 'emp1',
            name: 'أحمد محمد سالم',
            position: 'مدير المبيعات',
            department: 'مبيعات',
            baseSalary: 8000,
            hireDate: '2022-01-15',
            phone: '+966501111111'
        },
        {
            id: 'emp2',
            name: 'سارة أحمد علي',
            position: 'محاسبة',
            department: 'محاسبة',
            baseSalary: 7000,
            hireDate: '2022-03-01',
            phone: '+966502222222'
        },
        {
            id: 'emp3',
            name: 'خالد عبدالله',
            position: 'أمين مخزن',
            department: 'مخازن',
            baseSalary: 5000,
            hireDate: '2023-01-10',
            phone: '+966503333333'
        }
    ];
    
    // Sample invoices
    AppState.invoices = [
        {
            id: 'inv1',
            number: 'INV-000001',
            customerId: 'cust1',
            customerName: 'محمد العلي',
            date: new Date().toISOString().split('T')[0],
            total: 4200,
            status: 'paid',
            items: [
                {
                    id: 'item1',
                    productId: 'prod2',
                    productName: 'هاتف iPhone 15',
                    quantity: 1,
                    price: 4200,
                    discount: 0,
                    total: 4200
                }
            ]
        },
        {
            id: 'inv2',
            number: 'INV-000002',
            customerId: 'cust2',
            customerName: 'فاطمة السلمان',
            date: new Date(Date.now() - 86400000).toISOString().split('T')[0], // Yesterday
            total: 225,
            status: 'confirmed',
            items: [
                {
                    id: 'item2',
                    productId: 'prod3',
                    productName: 'قميص قطني',
                    quantity: 3,
                    price: 75,
                    discount: 0,
                    total: 225
                }
            ]
        }
    ];
    
    // Transfer requests
    AppState.transferRequests = [
        {
            id: 'REQ-000001',
            type: 'transfer',
            fromWarehouse: 'المخزن الرئيسي',
            toWarehouse: 'مخزن جدة',
            items: [
                { productId: 'prod1', productName: 'لابتوب HP Pavilion', quantity: 5 }
            ],
            status: 'pending',
            date: new Date().toISOString(),
            requester: 'سارة أحمد'
        }
    ];
    
    // Default settings
    AppState.settings = {
        companyName: 'BRAINBYTE ERP',
        companyPhone: '+966112345678',
        companyEmail: 'info@brainbyte.com',
        companyAddress: 'الرياض - المملكة العربية السعودية',
        currency: 'EGP',
        invoiceFooter: 'شكراً لتعاملكم معنا',
        defaultLanguage: 'ar',
        dateFormat: 'DD/MM/YYYY',
        enableBarcode: true,
        enableNotifications: true
    };
    
    // Save all data
    Storage.save('categories', AppState.categories);
    Storage.save('products', AppState.products);
    Storage.save('warehouses', AppState.warehouses);
    Storage.save('customers', AppState.customers);
    Storage.save('suppliers', AppState.suppliers);
    Storage.save('employees', AppState.employees);
    Storage.save('invoices', AppState.invoices);
    Storage.save('transferRequests', AppState.transferRequests);
    Storage.save('settings', AppState.settings);
}

function loadAppData() {
    AppState.categories = Storage.load('categories', []);
    AppState.products = Storage.load('products', []);
    AppState.warehouses = Storage.load('warehouses', []);
    AppState.customers = Storage.load('customers', []);
    AppState.suppliers = Storage.load('suppliers', []);
    AppState.employees = Storage.load('employees', []);
    AppState.invoices = Storage.load('invoices', []);
    AppState.transferRequests = Storage.load('transferRequests', []);
    AppState.settings = Storage.load('settings', {});
}

// ========================================
// EVENT LISTENERS
// ========================================

function initEventListeners() {
    // Login form
    document.getElementById('loginForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const language = document.getElementById('languageSelect').value;
        
        I18n.setLanguage(language);
        AuthManager.login(username, password);
    });
    
    // Password toggle
    document.getElementById('togglePassword')?.addEventListener('click', () => {
        const passwordInput = document.getElementById('password');
        const toggleIcon = document.querySelector('#togglePassword i');
        
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            toggleIcon.className = 'bi bi-eye-slash';
        } else {
            passwordInput.type = 'password';
            toggleIcon.className = 'bi bi-eye';
        }
    });
    
    // Language toggle
    document.getElementById('langToggle')?.addEventListener('click', () => {
        const newLang = AppState.currentLanguage === 'ar' ? 'en' : 'ar';
        I18n.setLanguage(newLang);
    });
    
    // Theme toggle
    document.getElementById('themeToggle')?.addEventListener('click', () => {
        ThemeManager.toggle();
    });
    
    // Sidebar toggle
    document.getElementById('sidebarToggle')?.addEventListener('click', () => {
        const sidebar = document.getElementById('appSidebar');
        sidebar.classList.toggle('mini');
        AppState.sidebarMini = sidebar.classList.contains('mini');
        Storage.save('sidebarMini', AppState.sidebarMini);
    });
    
    // Language selector in login
    document.getElementById('languageSelect')?.addEventListener('change', (e) => {
        I18n.setLanguage(e.target.value);
    });
    
    // FAB toggle
    document.getElementById('fabMain')?.addEventListener('click', () => {
        const fabMenu = document.querySelector('.fab-menu');
        fabMenu.classList.toggle('show');
    });
    
    // Hide FAB menu when clicking outside
    document.addEventListener('click', (e) => {
        const fabContainer = document.querySelector('.fab-container');
        if (fabContainer && !fabContainer.contains(e.target)) {
            document.querySelector('.fab-menu')?.classList.remove('show');
        }
    });
}

// ========================================
// APP INITIALIZATION
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    // Hide loading spinner
    setTimeout(() => {
        document.getElementById('loadingSpinner').style.display = 'none';
    }, 1000);
    
    // Initialize managers
    I18n.init();
    ThemeManager.init();
    
    // Load data or seed if first time
    const hasData = Storage.load('products');
    if (!hasData) {
        seedData();
    }
    loadAppData();
    
    // Initialize modules
    AuthManager.init();
    GlobalSearch.init();
    KeyboardShortcuts.init();
    PWAManager.init();
    
    // Set up event listeners
    initEventListeners();
    
    // Load saved sidebar state
    const savedSidebarMini = Storage.load('sidebarMini', false);
    if (savedSidebarMini) {
        document.getElementById('appSidebar')?.classList.add('mini');
    }
    
    // Show login by default
    AuthManager.showLogin();
});

// Make functions globally available
window.showView = showView;
window.logout = logout;
window.createNewInvoice = createNewInvoice;
window.showProductForm = showProductForm;
window.showEmployeeForm = showEmployeeForm;
window.showWarehouseForm = showWarehouseForm;
window.showWarehouseTransferForm = showWarehouseTransferForm;
window.addTransferItem = addTransferItem;
window.addProductToInvoice = addProductToInvoice;
window.updateInvoiceTable = updateInvoiceTable;
window.updateItemDiscount = updateItemDiscount;
window.removeInvoiceItem = removeInvoiceItem;
window.calculateInvoiceTotal = calculateInvoiceTotal;
window.saveInvoice = saveInvoice;
window.printInvoice = printInvoice;
window.clearProductFilters = clearProductFilters;
window.saveCompanySettings = saveCompanySettings;
window.updateProfile = updateProfile;
window.changeAvatar = changeAvatar;
window.generatePayroll = generatePayroll;
window.printPayslip = printPayslip;
window.exportDashboard = exportDashboard;
window.exportReport = exportReport;
window.exportData = exportData;
window.importData = importData;
window.resetData = resetData;
window.generateReport = generateReport;
window.generateSalesReport = generateSalesReport;
window.generateInventoryReport = generateInventoryReport;

// Global error handler
window.addEventListener('error', (e) => {
    console.error('Global error:', e.error);
    NotificationManager.addNotification('حدث خطأ في النظام', 'error');
});

// Console welcome message
console.log(`
🚀 BRAINBYTE ERP System Loaded Successfully!
📱 PWA Support: ${navigator.serviceWorker ? 'Enabled' : 'Disabled'}
🌐 Language: ${AppState.currentLanguage}
🎨 Theme: ${AppState.currentTheme}
`);