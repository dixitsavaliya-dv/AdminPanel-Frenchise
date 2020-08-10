export default {
 items:[
    {
      id:'dashborad',
      url: '/dashboard',
      name: 'Dashboard',
      icon: 'fa fa-desktop fs-16'
    },
    {
      id:'user management',
      name: 'User-Management',
      icon: 'fa fa-user fs-16',
      children: [
        {
          name: 'User',
          url: '/users'
        },
        {
          name: 'Role',
          url: '/role'
        },
        {
          name: 'Role Privileges',
          url: '/role-privileges'
        }
      ]
    },
    {
      id:'Category management',
      name: 'Category Management',
      icon: 'fa fa-list fs-16',
      children: [
        {
          name: 'Category',
          url: '/category'
        },
        {
          name: 'Sub Category',
          url: '/subcategory'
        }
      ]
    },
    {
      id:'area',
      name: 'Area Management',
      icon: 'fa fa-area-chart fs-16',
      children: [
        {
          name: 'Area',
          url: '/list-area'
        }
      ]
    },
    {
      id:'Shop management',
      name: 'Shop Management',
      icon: 'fa fa-shopping-cart fs-16',
      children: [
        {
          name: 'Shop',
          url: '/shop'
        },
        {
          name: 'Shop Verification',
          url: '/shop-verification'
        }
      ]
    },
    {
      id:'Product management',
      name: 'Product Management',
      icon: 'fa fa-list-alt fs-16',
      children: [
        {
          name: 'Product',
          url: '/product'
        }
      ]
    },
    {
      id:'Delivery Boy management',
      name: 'Delivery Boy Management',
      icon: 'fa fa-truck fs-16',
      children: [
        {
          name: 'Delivery Boy',
          url: '/delivery'
        },
        {
          name: 'Delivery Boy Verification',
          url: '/delivery-verification'
        }
      ]
    },
    {
      id:'Order management',
      name: 'Order Management',
      icon: 'fa fa-list fs-16',
      children: [
        {
          name: 'Order',
          url: '/order'
        }
      ]
    },
    {
      id:'Frenchise management',
      name: 'Frenchise Management',
      icon: 'fa fa-shopping-basket fs-16',
      children: [
        {
          name: 'Frenchise',
          url: '/frenchise'
        }
      ]
    },
    {
      id:'Payment management',
      name: 'Payment Management',
      icon: 'fa fa-money fs-16',
      children: [
        {
          name: 'Payment',
          url: '/payment'
        },
        {
          name: 'Payout',
          url: '/payout'
        }
      ]
    },
    {
      id:'Rating management',
      name: 'Rating Management',
      icon: 'fa fa-star fs-16',
      children: [
        {
          name: 'Rating',
          url: '/rating'
        },
        {
          name: 'Rating Data',
          url: '/rating-data'
        },
        {
          name: 'Rating Master',
          url: '/rating-master'
        }
      ]
    },
  ]
}


