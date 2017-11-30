# 用React仿知乎日报 Webapp


## 笔记
#### actions

#### components

#### config

#### containers
Component组件生命周期

    * Mounting：已插入真实 DOM
    * Updating：正在被重新渲染
    * Unmounting：已移出真实 DOM
    
   React 为每个状态都提供了两种处理函数，will 函数在进入状态之前调用，did 函数在进入状态之后调用，三种状态共计五种处理函数。

    * componentWillMount :会在组件render之前执行，并且永远都只执行一次。 
    * componentDidMount：组件加载完毕之后立即执行
    * componentWillReceiveProps： 组件接收到一个新的prop时被执行。这个方法在初始化render时不会被调用
    * componentWillUpdate：组件接收到新的props或者state但还没有render时被执行
    * componentDidUpdate :在组件完成更新后立即执行


函数内路由跳转

     *  this.context.router.push('/') ，注：这个写法会把跳转载入浏览器历史，若不想留下历史记录则可以 this.context.router.replace('/') 
带有动画效果的路由切换(摘要: ReactCSSTransitionGroup)

     * 当我们需要在路由切换时带有一定的动画效果时，我们便需react-addons-css-transition-group 这个插件了。使用ReactCSSTransitionGroup组件来包含我们需要呈现动画效果的view

props用法
    1、PropTypes
       组件类的PropTypes属性，就是用来验证组件实例的属性是否符合要求。
    2、默认 Prop 值 getDefaultProps
       当父级没有传入 props 时，getDefaultProps() 可以保证 this.props.value 有默认值，注意 getDefaultProps 的结果会被 缓存。得益于此，你可以直接使用 props，而不必手动编写一些重复或无意义的代码。
#### helpers


#### reducers