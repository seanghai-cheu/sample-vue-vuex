/**
 * company router
 */
export const companyRoute = {
	path: '/company',
	name: 'company',
	component: () => import('../views/company/Index'),
	children: [
		{
			path: '/',
			name: 'company-list',
			component: () => import('../views/company/List')
		},
		{
			path: '/create',
			name: 'company-create',
			component: () => import('../views/company/Form')
		},
		{
			path: '/edit/:id',
			name: 'company-edit',
			component: () => import('../views/company/Form')
		}
	]
}
