import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
  };

  const services = [
    { 
      icon: 'Share2', 
      title: 'SMM', 
      description: 'Управление социальными сетями и создание вирусного контента'
    },
    { 
      icon: 'Target', 
      title: 'Таргет', 
      description: 'Точечная реклама для вашей целевой аудитории'
    },
    { 
      icon: 'FileText', 
      title: 'Контент', 
      description: 'Разработка контент-стратегии и создание материалов'
    },
    { 
      icon: 'PenTool', 
      title: 'Копирайтинг', 
      description: 'Тексты, которые продают и вовлекают'
    },
    { 
      icon: 'Camera', 
      title: 'Съёмка', 
      description: 'Профессиональная фото и видеосъёмка для брендов'
    },
  ];

  const workflow = [
    { step: '01', title: 'Анализ', description: 'Глубокое погружение в ваш бизнес и целевую аудиторию' },
    { step: '02', title: 'Стратегия', description: 'Разработка маркетинговой стратегии и креативной концепции' },
    { step: '03', title: 'Реализация', description: 'Создание контента и запуск рекламных кампаний' },
    { step: '04', title: 'Аналитика', description: 'Мониторинг результатов и оптимизация процессов' },
  ];

  const team = [
    { name: 'Анна Петрова', role: 'CEO & Стратег', image: 'https://cdn.poehali.dev/projects/9e49bac1-048b-4a96-b3eb-154e93424464/files/fa0eb9de-36a0-427b-b068-a395d88ef5f4.jpg' },
    { name: 'Дмитрий Иванов', role: 'Креативный директор', image: 'https://cdn.poehali.dev/projects/9e49bac1-048b-4a96-b3eb-154e93424464/files/fa0eb9de-36a0-427b-b068-a395d88ef5f4.jpg' },
    { name: 'Мария Сидорова', role: 'SMM-менеджер', image: 'https://cdn.poehali.dev/projects/9e49bac1-048b-4a96-b3eb-154e93424464/files/fa0eb9de-36a0-427b-b068-a395d88ef5f4.jpg' },
    { name: 'Алексей Смирнов', role: 'Таргетолог', image: 'https://cdn.poehali.dev/projects/9e49bac1-048b-4a96-b3eb-154e93424464/files/fa0eb9de-36a0-427b-b068-a395d88ef5f4.jpg' },
  ];

  const cases = [
    { title: 'Рост продаж на 340%', client: 'E-commerce бренд', image: 'https://cdn.poehali.dev/projects/9e49bac1-048b-4a96-b3eb-154e93424464/files/3e512df2-c7b2-479a-89e3-34e9c71be86d.jpg' },
    { title: '2M+ охват за месяц', client: 'Fashion стартап', image: 'https://cdn.poehali.dev/projects/9e49bac1-048b-4a96-b3eb-154e93424464/files/3e512df2-c7b2-479a-89e3-34e9c71be86d.jpg' },
    { title: 'Запуск с 0 до лидера', client: 'Tech компания', image: 'https://cdn.poehali.dev/projects/9e49bac1-048b-4a96-b3eb-154e93424464/files/3e512df2-c7b2-479a-89e3-34e9c71be86d.jpg' },
  ];

  const partners = ['Google', 'Meta', 'TikTok', 'Yandex', 'VK'];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">AGENCY</h1>
          <div className="hidden md:flex gap-8">
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#workflow" className="hover:text-primary transition-colors">Методология</a>
            <a href="#team" className="hover:text-primary transition-colors">Команда</a>
            <a href="#cases" className="hover:text-primary transition-colors">Кейсы</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          <div className="hidden md:block">
            <Button size="sm">Оставить заявку</Button>
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name={isMenuOpen ? 'X' : 'Menu'} size={24} />
          </Button>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
              <a 
                href="#services" 
                className="hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Услуги
              </a>
              <a 
                href="#workflow" 
                className="hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Методология
              </a>
              <a 
                href="#team" 
                className="hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Команда
              </a>
              <a 
                href="#cases" 
                className="hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Кейсы
              </a>
              <a 
                href="#contact" 
                className="hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Контакты
              </a>
              <Button className="mt-2" onClick={() => setIsMenuOpen(false)}>
                Оставить заявку
              </Button>
            </div>
          </div>
        )}
      </nav>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
              Маркетинг
              <br />
              <span className="text-primary">полного цикла</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 font-light">
              SMM · Таргет · Контент · Копирайтинг · Съёмка
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="text-lg px-8">
                Начать проект
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                Наши кейсы
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-muted-foreground" />
        </div>
      </section>

      <section id="services" className="py-32 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-20">Наши услуги</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-slide-up border-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Icon name={service.icon} size={28} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="workflow" className="py-32 relative overflow-hidden">
        <div 
          className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full bg-primary/5 rounded-l-full"
          style={{ transform: `translateX(${scrollY * 0.1}px) translateY(-50%)` }}
        />
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-20">Как мы работаем</h2>
          <div className="max-w-4xl mx-auto space-y-12">
            {workflow.map((item, index) => (
              <div 
                key={index}
                className="flex gap-8 items-start animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="text-6xl font-bold text-primary/20 min-w-[100px]">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-3">{item.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="py-32 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-8">Наша команда</h2>
          <p className="text-xl text-center text-muted-foreground mb-20 max-w-2xl mx-auto">
            Профессионалы с опытом работы в ведущих digital-агентствах
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <Card 
                key={index}
                className="overflow-hidden group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="cases" className="py-32">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-20">Наши работы</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
            {cases.map((item, index) => (
              <Card 
                key={index}
                className="overflow-hidden group cursor-pointer animate-fade-in hover:shadow-2xl transition-all"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.client}</p>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-12">Наши партнёры</h3>
            <div className="flex flex-wrap justify-center items-center gap-12">
              {partners.map((partner, index) => (
                <div 
                  key={index}
                  className="text-2xl font-bold text-muted-foreground/40 hover:text-foreground transition-colors"
                >
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 bg-secondary text-secondary-foreground relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{ 
            backgroundImage: `url(https://cdn.poehali.dev/projects/9e49bac1-048b-4a96-b3eb-154e93424464/files/1572aa9d-1a07-49c7-b505-bbfa385d5ee8.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-8">Давайте работать вместе</h2>
            <p className="text-xl text-center mb-12 opacity-90">
              Оставьте заявку, и мы свяжемся с вами в течение 24 часов
            </p>
            
            <Card className="p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Имя</label>
                    <Input placeholder="Ваше имя" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон</label>
                    <Input type="tel" placeholder="+7 (___) ___-__-__" required />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input type="email" placeholder="example@mail.ru" required />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Расскажите о проекте</label>
                  <Textarea 
                    placeholder="Какие задачи нужно решить?"
                    rows={5}
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full text-lg">
                  Отправить заявку
                </Button>
              </form>
            </Card>

            <div className="mt-16 text-center space-y-4">
              <div className="flex justify-center gap-6">
                <a href="tel:+79991234567" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Icon name="Phone" size={20} />
                  <span>+7 (999) 123-45-67</span>
                </a>
                <a href="mailto:hello@agency.ru" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Icon name="Mail" size={20} />
                  <span>hello@agency.ru</span>
                </a>
              </div>
              <div className="flex justify-center gap-4 pt-4">
                <Button variant="outline" size="icon" className="rounded-full">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Icon name="Linkedin" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Icon name="Send" size={20} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-6 text-center text-muted-foreground">
          <p>© 2024 AGENCY. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;