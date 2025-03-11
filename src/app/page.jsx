import Header from "@/components/header";
import styles from "./page.module.css";
import Sidebar from "@/components/sidebar";
import DashboardContent from "@/components/dashboardContent";
import Footer from "@/components/footer";
import SummaryCards from "@/components/summaryCards";
import ChartContainers from "@/components/chartContainers";

export default function Home() {
  return (
    <div>
      <Header />

      <main className={styles.dashboardContainer}>
      <Sidebar /> 
      <DashboardContent />
      
      </main>

      <Footer />
    </div>
  );
}
