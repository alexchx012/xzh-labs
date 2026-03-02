import { useState, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import ScrollFadeIn from './ScrollFadeIn';
import ScrollFadeSection from './ScrollFadeSection';
import PortfolioModal from './PortfolioModal';

export interface PortfolioItem {
  titleCn: string;
  titleEn: string;
  periodCn: string;
  periodEn: string;
  /** 卡片表面简介（约3行） */
  descCn: string;
  descEn: string;
  /** 弹窗详细描述（约300字） */
  detailDescCn: string;
  detailDescEn: string;
  tags: string[];
  images: string[];
  emoji: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    titleCn: '智能机器人课程设计 - 移动机器人路径规划与智能识别',
    titleEn: 'Intelligent Robot Course Design - Mobile Robot Path Planning & Recognition',
    periodCn: '2024.09 - 2024.12',
    periodEn: 'Sep - Dec 2024',
    descCn: '基于ROS Melodic与Bulldog移动平台，实现激光雷达SLAM建图、AMCL定位、A*+DWA路径规划与避障，以及OpenCV目标识别，完成实车多目标点自主导航。',
    descEn: 'Built on ROS Melodic & Bulldog platform: LiDAR SLAM mapping, AMCL localization, A*+DWA path planning with obstacle avoidance, and OpenCV object recognition for multi-target autonomous navigation.',
    detailDescCn: '本项目基于ROS Melodic平台和Bulldog差速移动机器人，完成了从环境搭建到实车调试的全流程系统开发。前期在Ubuntu 18.04上搭建ROS开发环境并配置通信，完成两轮差速运动学模型的推导与节点实现。核心部分基于ROS Navigation框架，通过激光雷达配合手柄遥控完成室内SLAM建图，采用AMCL粒子滤波算法实现已知地图定位，集成A*全局路径规划与DWA动态窗口局部避障算法实现自主导航。视觉感知方面，利用OpenCV对USB摄像头图像进行灰度化、高斯滤波、自适应阈值处理、HSV颜色过滤及轮廓检测，实现特定颜色标志物的实时识别与坐标发布。同时编写了建图与导航两套整合启动脚本，搭建专属conda环境保障依赖隔离。实车测试中，机器人可依次完成多目标点导航，视觉识别模块同步运行，实现了导航与识别的协同工作。',
    detailDescEn: 'This project developed a full robotic system on ROS Melodic with the Bulldog differential-drive platform. It covers ROS environment setup on Ubuntu 18.04, two-wheel differential kinematics modeling, LiDAR SLAM mapping with joystick control, AMCL particle-filter localization, A* global planning + DWA local obstacle avoidance for autonomous navigation, and OpenCV-based target recognition using adaptive thresholding and HSV color filtering. Custom shell scripts automate the full launch pipeline with a dedicated conda environment. Real-robot tests confirmed stable multi-target navigation with concurrent visual recognition.',
    tags: ['ROS Melodic', 'Python', 'C++', 'OpenCV', 'SLAM', 'LiDAR', 'AMCL', 'A*', 'DWA'],
    images: ['/images/portfolio/robot/1.jpg', '/images/portfolio/robot/2.jpg', '/images/portfolio/robot/3.jpg'],
    emoji: '🤖',
  },
  {
    titleCn: '智能系统设计 - 语音信号处理系统',
    titleEn: 'Intelligent System Design - Speech Signal Processing System',
    periodCn: '2024.03 - 2024.06',
    periodEn: 'Mar - Jun 2024',
    descCn: '基于MATLAB App Designer开发的语音信号处理平台，包含8个场景化实验页面，覆盖低通/高通/带通/带阻巴特沃斯滤波及小波去噪、谱减法等高级算法。',
    descEn: 'A speech signal processing platform built with MATLAB App Designer, featuring 8 scenario-based experiment pages covering Butterworth LP/HP/BP/BS filtering, wavelet denoising, spectral subtraction, and more.',
    detailDescCn: '本项目以数字信号处理理论为基础，使用MATLAB App Designer构建了集成化的语音信号处理系统。系统采用场景化问题驱动设计，包含8个独立实验页面，覆盖"语音与白噪音""低频乐器与高频干扰""小提琴与粉红噪音""鸟鸣与低频干扰""键盘敲击噪音""鼠标按键噪音""去除工频干扰""去除特定音调干扰"等典型信噪组合场景。各场景针对性地选择低通、高通、带通、带阻巴特沃斯滤波器，以及小波阈值去噪、NLMS自适应滤波和谱减法等高级算法。系统实现了从音频采集、FFT频谱分析、噪声叠加、滤波降噪到信号回放的完整处理流程，并提供实时时域和频域可视化。实验表明，当信号与噪声频域分离明显时，传统滤波器效果良好；频谱重叠严重时，需采用自适应算法或时频域联合处理方法。',
    detailDescEn: 'This project built an integrated speech signal processing system using MATLAB App Designer. It adopts a scenario-driven design with 8 independent experiment pages covering typical signal-noise combinations: speech with white noise, low-frequency instruments with HF interference, violin with pink noise, birdsong with LF interference, keyboard/mouse click noise, powerline hum removal, and specific tone removal. Each scenario employs appropriate Butterworth LP/HP/BP/BS filters, wavelet thresholding, NLMS adaptive filtering, or spectral subtraction. The system supports the full pipeline: audio acquisition, FFT spectrum analysis, noise mixing, filtering, and playback with real-time time/frequency domain visualization.',
    tags: ['MATLAB', 'Signal Processing', 'Audio Processing', 'GUI Design', 'Butterworth Filter', 'Wavelet', 'FFT'],
    images: ['/images/portfolio/audio/1.png', '/images/portfolio/audio/2.png', '/images/portfolio/audio/3.png'],
    emoji: '🎵',
  },
  {
    titleCn: '计算机视觉 - 车道线检测项目',
    titleEn: 'Computer Vision - Lane Detection Project',
    periodCn: '2024.03 - 2024.06',
    periodEn: 'Mar - Jun 2024',
    descCn: '基于OpenCV的静态图像车道线检测系统，通过ROI手动标定、Canny边缘检测、概率霍夫变换与斜率分类，实现左右车道线的自动识别与可视化标注。',
    descEn: 'A static image lane detection system using OpenCV with manual ROI calibration, Canny edge detection, probabilistic Hough transform, and slope-based left/right lane classification with visual annotation.',
    detailDescCn: '本项目使用Python和OpenCV实现了静态图像中车道线的自动检测。系统封装为LaneDetector类，首先通过鼠标回调函数实现ROI（感兴趣区域）的手动标定，用户在首张图像上点击顶点即可确定检测区域。核心处理流程依次执行灰度转换、高斯模糊去噪、Canny边缘检测、ROI掩码裁剪，再通过概率霍夫变换（HoughLinesP）检测直线段。检测到的直线根据斜率正负区分为左右车道线，分别用不同颜色绘制，同时叠加蓝色ROI边框作为参考。系统支持批量处理，遍历指定目录下所有图像并输出标注结果到output目录。实验在1000+张图像数据集上进行测试，结果表明该方法对标线清晰、光照均匀的直道场景检测效果良好，但在弯道、阴影或标线模糊等复杂场景下仍有局限。',
    detailDescEn: 'This project implements automatic lane detection on static images using Python and OpenCV. The system is encapsulated in a LaneDetector class with mouse-callback-based manual ROI calibration. The core pipeline performs grayscale conversion, Gaussian blur denoising, Canny edge detection, ROI masking, and probabilistic Hough transform (HoughLinesP) for line detection. Detected lines are classified as left/right lanes by slope sign and drawn in different colors, with the ROI boundary overlaid for reference. Batch processing is supported across a 1000+ image dataset. Results show effective detection on clear, well-lit straight roads, with limitations on curves, shadows, or faded markings.',
    tags: ['Python', 'OpenCV', 'Canny', 'Hough Transform', 'ROI', 'Image Processing'],
    images: ['/images/portfolio/lane/1.png', '/images/portfolio/lane/2.png', '/images/portfolio/lane/3.png', '/images/portfolio/lane/4.png'],
    emoji: '🚗',
  },
  {
    titleCn: 'LabVIEW - 虚拟计算器开发',
    titleEn: 'LabVIEW - Virtual Calculator Development',
    periodCn: '2024.03 - 2024.06',
    periodEn: 'Mar - Jun 2024',
    descCn: '基于LabVIEW事件结构与状态机设计的虚拟计算器，支持0-9数字输入、四则混合运算、小数点/负号处理、退格清零及除零保护等完整功能。',
    descEn: 'A virtual calculator built with LabVIEW event structures and state machine, supporting 0-9 digit input, four arithmetic operations, decimal/negative handling, backspace, clear, and division-by-zero protection.',
    detailDescCn: '本项目基于LabVIEW图形化编程环境，设计并实现了一款功能完整的虚拟计算器。系统建立19个布尔控件对应数字0-9、加减乘除运算符、等号、负号、小数点、退格和清零按键，通过事件结构捕获按键事件并更新显示。数字输入通过字符串连接实现多位数组合，小数点输入限制为最多一个（无前导数字时默认补0），负号支持为已有数值添加或移除负号。按下运算符时将当前输入保存为操作数1并记录运算类型，按下等号时取操作数2，经条件结构判断执行对应四则运算并输出结果，支持连续混合运算。退格功能从末位逐字符删除直至清空，清零功能通过空字符串对所有变量复位。系统还实现了除零保护提示。整体界面简洁直观，功能分区明确，展示了LabVIEW在图形化编程和交互式虚拟仪器开发方面的核心能力。',
    detailDescEn: 'This project designed a fully functional virtual calculator using LabVIEW graphical programming. The system uses 19 Boolean controls for digits 0-9, four arithmetic operators, equals, negative sign, decimal point, backspace, and clear. Event structures capture button clicks and update the display via string concatenation for multi-digit input. Decimal input is limited to one (auto-prefixing 0 when needed), and the negative sign can be toggled. Pressing an operator saves the current input as operand 1; pressing equals retrieves operand 2 and executes the operation via case structures, supporting chained mixed arithmetic. Backspace deletes characters from the end, and clear resets all variables. Division-by-zero protection is included. The clean, intuitive interface demonstrates LabVIEW\'s strengths in graphical programming and interactive virtual instrument development.',
    tags: ['LabVIEW', 'Graphical Programming', 'Virtual Instrument', 'State Machine', 'Event Structure'],
    images: ['/images/portfolio/labview/1.png', '/images/portfolio/labview/2.png', '/images/portfolio/labview/3.png', '/images/portfolio/labview/4.png'],
    emoji: '🔬',
  },
];

const PortfolioCard = ({ item, index }: { item: PortfolioItem; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const isReversed = index % 2 === 1;
  const { t } = useLanguage();

  const coverImage = item.images[0];

  return (
    <div ref={ref}>
      <ScrollFadeIn delay={0} direction={isReversed ? 'right' : 'left'}>
        <div
          className={`w-full glass glass-hover rounded-2xl p-6 md:p-8 flex flex-col ${
            isReversed ? 'md:flex-row-reverse' : 'md:flex-row'
          } gap-6 items-center text-left transition-all cursor-pointer`}
        >
          <motion.div
            style={reduced ? {} : { y: imageY }}
            className="w-full md:w-2/5 aspect-video rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center flex-shrink-0 overflow-hidden"
          >
            {coverImage ? (
              <img
                src={coverImage}
                alt={t(item.titleCn, item.titleEn)}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            ) : (
              <span className="text-4xl">{item.emoji}</span>
            )}
          </motion.div>

          <div className="flex-1">
            <h3 className="text-xl font-semibold text-foreground mb-2">
              {t(item.titleCn, item.titleEn)}
            </h3>
            <p className="text-sm text-muted-foreground mb-1">
              {t(item.periodCn, item.periodEn)}
            </p>
            <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
              {t(item.descCn, item.descEn)}
            </p>
            <div className="flex flex-wrap gap-2">
              {item.tags.map(tag => (
                <span key={tag} className="tag text-xs">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </ScrollFadeIn>
    </div>
  );
};

const PortfolioSection = () => {
  const { t } = useLanguage();
  const [selected, setSelected] = useState<PortfolioItem | null>(null);

  return (
    <section id="portfolio" className="py-24">
      <ScrollFadeSection className="container mx-auto px-4">
        <ScrollFadeIn>
          <h2 className="section-title text-center mb-16">
            {t('作品集', 'Portfolio')}
          </h2>
        </ScrollFadeIn>

        <div className="max-w-5xl mx-auto space-y-8">
          {portfolioItems.map((item, i) => (
            <div key={i} onClick={() => setSelected(item)}>
              <PortfolioCard item={item} index={i} />
            </div>
          ))}
        </div>
      </ScrollFadeSection>

      <PortfolioModal item={selected} onClose={() => setSelected(null)} />
    </section>
  );
};

export default PortfolioSection;
